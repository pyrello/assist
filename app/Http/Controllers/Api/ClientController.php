<?php

namespace App\Http\Controllers\Api;

use App\Address;
use App\Client;
use App\ClientRelationship;
use App\Ethnicity;
use App\Gender;
use App\Household;
use App\Http\Requests\CreateClientRequest;
use App\Http\Requests\UpdateClientRequest;
use App\Http\Resources\Client as ClientResource;
use App\Intake;
use App\Note;
use App\Phone;
use App\Services\ClientService;
use Carbon\Carbon;
use DB;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Response;

/**
 * Class UserAPIController
 * @package App\Http\Controllers\API
 */

class ClientController extends BaseController
{
    /**
     * Display a listing of the Clients.
     * GET|HEAD /clients
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        logger('Request vars: ' . print_r($request->all(), true));
        $q = $request->get('q');

        $params = $request->except('q');

        // Search by Name
        // Search by Phone number
        // Search by ID
        // Search by intake date
        // Search by activity date

        /**
         * Here's the idea:
         *
         * If the user is entering alpha characters, then they
         * are probably doing a name search. If the user is
         * entering number characters, then they are doing one
         * of the following types of searches:
         *  * ID
         *  * Phone Number
         *  * Intake Date
         *  * Activity Date
         *
         * Either here, or in the javascript, there should be
         * the logic to determine whether it is an alpha or
         * numeric search and to react accordingly. If it is
         * a numeric search, then we may need to look for
         * additional symbols (e.g. "/" or "-") to see if it
         * is a date.
         */

        /** @var \Illuminate\Database\Eloquent\Builder $search_query */
        $search_query = Client::with('phones');

        $excludeAnonymous = true;

        // If $q is numeric
        if (is_numeric($q)) {
            // $q is numeric so this is either an id, a phone number, or a date

            $search_query = $search_query->where(function($query) use ($q) {
                // Phone number contains $q
                $query->whereHas('phones', function ($query) use ($q) {
                    $query->where('number', 'like', "%$q%");
                })->orWhere('id', 'like', "$q%");
            });


        }
        else if (is_string($q)) {
            $fragments = explode(' ', strtolower($q));

            foreach ($fragments as $fragment) {
                $search_query = $search_query->where(function($query) use ($fragment) {
                    $query->where(DB::raw('LOWER(first_name)'), 'like', "$fragment%")
                        ->orWhere(DB::raw('LOWER(last_name)'), 'like', "$fragment%");
                });
            }
        }

        if (!empty($params)) {
            if (isset($params['intake_date'])) {
                $search_query->whereHas('intake', function ($query) use ($params) {
                    $query->whereDate('date', '=', $params['intake_date']);
                });
            }
            if (isset($params['activity_date'])) {
                $search_query->whereHas('activities', function ($query) use ($params) {
                    $query->whereDate('started_at', '<=', $params['activity_date'])
                        ->whereDate('ended_at', '>=', $params['activity_date']);
                });
            }

            if (isset($params['parent_id'])) {
                $search_query->where('parent_id', '=', $params['parent_id']);
                $excludeAnonymous = false;
            }
        }

//        logger('Query: ' . $search_query->toSql());

        if ($excludeAnonymous) {
            $search_query = $search_query
                ->where('anonymous', '=', false);
        }

        $results = $search_query->paginate(20);

        return ClientResource::collection($results);
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $q = $request->get('q');

        $search_query = Client::query();

        if (!is_null($exclude = $request->get('exclude'))) {
            if (is_numeric($exclude)) {
                $search_query = $search_query->where('id', '<>', $exclude);
            }
            elseif (is_string($exclude)) {
                info('Exclude: ' . $exclude);
                switch ($exclude) {
                    case 'dependents':
                        $results = $search_query->whereNull('parent_id');
                        break;
                    case 'parents':
                        $results = $search_query->whereNotNull('parent_id');
                        break;
                }
            }
        }

        $search_query = $search_query->where(function($query) use ($q) {
            $query->where(DB::raw('LOWER(first_name)'), 'like', "$q%")
                ->orWhere(DB::raw('LOWER(last_name)'), 'like', "$q%");
        });

        $results = $search_query->get();

        return ClientResource::collection($results);
    }

    /**
     * Store a newly created Client in storage.
     * POST /clients
     *
     * @param CreateClientRequest $request
     * @return ClientResource|JsonResponse|Response
     * @throws \Exception
     */
    public function store(CreateClientRequest $request)
    {
        DB::beginTransaction();

        try {
            // Get all data except the address
            $data = $request->all();

            // Create the client
            /** @var Client $client */
            $client = Client::create($data);

            // Todo: test to make sure this works correctly
            if (!$data['homeless']) {

                // Create the address
                $address = Address::create($data['address']);

                // Associate the address
                $client->address()->associate($address);
            }

            // Create the intake
//            $intake = new Intake($data['intake']);

            // Save and associate the intake
//            $client->intake()->save($intake);

            // Check that ethnicity ids exist
            $ethnicity = Ethnicity::findOrFail(array_values($data['ethnicity_ids']));

            // Attach ethnicity ids and weight
            $ethnicity_attach = array_map(function ($order) {
                return ['order' => $order];
            }, array_flip($data['ethnicity_ids']));


            $client->ethnicity()->attach($ethnicity_attach);

            if ($phones = $request->get('phones')) {
                $client->phones()->createMany($phones);
            }

            // Todo: Test that saving and associating household works
            // If a head of household was indicated...
            if (!is_null($head_of_household_id = $request->get('head_of_household_id'))) {
                // Get the existing household record
                $h = Household::where('head_of_household_id', '=', $head_of_household_id);
                // If there is a relationship included, save it

                if (!is_null($relationship_data = $request->get('relationship'))) {
                    $relationship_data['head_of_household_id'] = $head_of_household_id;
                    $relationship_data['client_id'] = $client->id;
                    //$relationship = ClientRelationship::create($relationship_data);

                    $client->relationship()->create($relationship_data);
                }
            }
            // Otherwise...
            else {
                $household = $request->get('household');
                $household['head_of_household_id'] = $client->id;
                // Create the new household record
                $h = Household::create($household);
            }

            // Add the household record to the client
            $client->household()->associate($h);

            // Todo: Test that saving and associating notes works
            // If a note is being added
            if (!is_null($note = $request->get('note')) && $note !== '') {

                $n = new Note([
                    'content' => $note,
                    'advocate_id' => $intake->advocate_id,
                    'client_id' => $client->id,
                ]);

                $client->notes()->save($n);
            }

            // Save updates to the client
            $client->save();
            info('Saved client again');

            DB::commit();

            $client->load(['address', 'ethnicity' => function ($q) {
                $q->orderBy('pivot_order', 'asc');
            }, 'intake', 'lastIncident', 'phones']);

            return new ClientResource($client);

        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }

    }

    /**
     * Display the specified Client.
     * GET|HEAD /clients/{id}
     *
     * @param  int $id
     *
     * @return Response|\App\Http\Resources\Client
     */
    public function show($id)
    {
        /** @var Client $client */
        $client = Client::with(['address', 'ethnicity' => function($q) {
            $q->orderBy('pivot_order', 'asc');
        }, 'household', 'intake', 'lastIncident', 'phones'])->findOrFail($id);

        return new ClientResource($client);
    }

    /**
     * Update the specified Client in storage.
     * PUT/PATCH /clients/{id}
     *
     * @param Client $client
     * @param UpdateClientRequest $request
     * @return ClientResource
     * @throws \Exception
     */
    public function update(Client $client, UpdateClientRequest $request)
    {
        DB::beginTransaction();

        try {
            // Get all data except the address
            $updated = $request->except('address', 'ethnicity', 'household', 'relationship');

            $client->update($updated);

            if (!is_null($address = $request->get('address'))) {
                ClientService::updateAddress($client, $address);
            }

            // Does ethnicity need to be updated?
            if (!is_null($ethnicity_ids = $request->get('ethnicity_ids'))) {
                ClientService::syncEthnicity($client, $ethnicity_ids);
            }

            if (!is_null($household = $request->get('household'))) {
                ClientService::updateHousehold($client, $household);
            }

            // Save updates to the client
            $client->save();

            DB::commit();

            $client->load(['address', 'ethnicity' => function($q) {
                $q->orderBy('pivot_order', 'asc');
            }, 'household', 'intake', 'lastIncident', 'phones']);

            return new ClientResource($client);

        } catch (\Exception $e) {
            logger($e->getMessage());
            DB::rollback();
            throw $e;
        }
    }

    /**
     * Remove the specified Clients from storage.
     * DELETE /clients/{id}
     *
     * @param Client $client
     * @return JsonResponse
     * @throws \Exception
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Client $client)
    {
        $id = $client->id;

        $this->authorize('delete', $client);

        $client->delete();

        return new JsonResponse(compact('id'));
    }
}
