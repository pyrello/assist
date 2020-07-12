<?php

namespace App\Http\Controllers\Api;

use App\Abuser;
use App\Http\Resources\Abuser as AbuserResource;
use App\Services\AbuserService;
use DB;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Response;

/**
 * Class UserAPIController
 * @package App\Http\Controllers\API
 */

class AbuserController extends BaseController
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
        $q = $request->get('q');
        $search_query = Abuser::with('relationships')
            ->orderBy('last_name')
            ->orderBy('first_name');

//        $possible_filters = [
//            'first_name',
//            'last_name',
//            'birth_date',
//            'gender',
//            'eye_color',
//            'hair_color',
//            'hair_length',
//            'height',
//            'weight',
//            'identifying_features',
//            'vehicle',
//        ];

        if ($q && $q !== '') {
            /**
             * SELECT * from `abusers` where (`first_name` like ? or `last_name` like ?) and
             */

            $fragments = explode(' ', $q);

            foreach ($fragments as $fragment) {
                $search_query = $search_query->where(function($query) use ($fragment) {
                    $query->where(DB::raw('LOWER(first_name)'), 'like', "$fragment%")
                        ->orWhere(DB::raw('LOWER(last_name)'), 'like', "$fragment%");
                });
            }
        }

        logger('sql', [$search_query->toSql()]);

        // If a client id was passed, limit the results to that client
        if (!is_null($client_id = $request->get('client_id'))) {
            $search_query = $search_query->with('clients')->whereHas('clients', function ($q) use ($client_id) {
                $q->where('clients.id', '=', $client_id);
            });
        }

        // If an incident id was passed, limit the results to that incident
        if (!is_null($incident_id = $request->get('incident_id'))) {
            $search_query = $search_query->where('incident_id', '=', $incident_id);
        }

        return AbuserResource::collection($search_query->paginate(20));
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

        $results = Abuser::where('first_name', 'like', "$q%")
            ->orWhere('last_name', 'like', "$q%")
            ->get();

        return AbuserResource::collection($results);
    }

    /**
     * Store a newly created Client in storage.
     * POST /clients
     *
     * @param Request $request
     * @return AbuserResource
     */
    public function store(Request $request)
    {
        // Get all data
        $data = $request->all();
        logger('Data: ' . print_r($data, true));

        // Create the abuser
        /** @var Abuser $abuser */
        $abuser = Abuser::create($data['abuser']);

        if (!empty($data['relationship']) && !empty($data['relationship']['client_id'])) {
            $client_id = $data['relationship']['client_id'];
            $pivot = [];
            if (!is_null($relationship = $request->get('relationship'))) {
                $pivot['relationship'] = $relationship['relationship'];
                $pivot['abuse_types'] = $relationship['abuse_types'];
            }
            $abuser->clients()->attach($client_id, $pivot);
        }

        if (!is_null($incident_id = $request->get('incident_id'))) {
            $abuser->incidents()->attach($incident_id);
        }

        $abuser->save();

        $abuser->load(['clients', 'incidents']);

        return new AbuserResource($abuser);
    }

    /**
     * Display the specified Client.
     * GET|HEAD /clients/{id}
     *
     * @param  int $id
     *
     * @return AbuserResource
     */
    public function show($id)
    {
        /** @var Abuser $abuser */
        $abuser = Abuser::with('ethnicity')->findOrFail($id);

        return new AbuserResource($abuser);
    }

    /**
     * Update the specified Client in storage.
     * PUT/PATCH /clients/{id}
     *
     * @param  int $id
     * @param Request $request
     * @return AbuserResource
     * @throws \Exception
     */
    public function update($id, Request $request)
    {
        // Find and update the client
        $abuser = Abuser::find($id);

        // Update the abuser if there is updated info
        if (!is_null($updated = $request->all())) {
            $abuser->update($updated);
        }

        if (!is_null($ethnicity_ids = $request->get('ethnicity_ids'))) {
            AbuserService::syncEthnicity($abuser, $ethnicity_ids);
        }

        if (!is_null($incident_id = $request->get('incident_id'))) {
            $abuser->incidents()->attach($incident_id);
        }

        $abuser->load(['clients', 'incidents']);

        return new AbuserResource($abuser);
    }

    /**
     * Remove the specified Abuser from storage.
     * DELETE /abusers/{id}
     *
     * @param Abuser $abuser
     * @return JsonResponse
     * @throws \Exception
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Abuser $abuser)
    {
        $id = $abuser->id;

        $this->authorize('delete', $abuser);

        $abuser->delete();

        return new JsonResponse(compact('id'));
    }
}
