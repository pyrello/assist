<?php

namespace App\Http\Controllers\Api;

use App\Abuser;
use App\AbuseRelationship;
use App\Client;
use App\Services\AbuserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Response;

/**
 * Class UserAPIController
 * @package App\Http\Controllers\API
 */

class AbuseRelationshipController extends BaseController
{
    /**
     * Display a listing of the AbuseRelationships, optionally filtered
     * by client id or abuser id.
     * GET|HEAD /abuse-relationships
     *
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection|Response
     */
    public function index(Request $request)
    {
        $query = AbuseRelationship::query();

        // If a client id was passed, limit the results to that client
        if (!is_null($client_id = $request->get('client_id'))) {
            $query = $query->with('abuser')->whereHas('client', function ($q) use ($client_id) {
                $q->where('clients.id', '=', $client_id);
            });
        }

        // If a client id was passed, limit the results to that client
        if (!is_null($abuser_id = $request->get('abuser_id'))) {
            $query = $query->with('client')->whereHas('abuser', function ($q) use ($abuser_id) {
                $q->where('abusers.id', '=', $abuser_id);
            });
        }

        return JsonResource::collection($query->paginate(20));
    }

    /**
     * Store a newly created AbuseRelationship in storage.
     * POST /abuse-relationships
     *
     * @param Request $request
     * @return JsonResource
     */
    public function store(Request $request)
    {
        // Get all data
        $data = $request->all();

        $client = Client::findOrFail($request->get('client_id'));

        if (empty($data['abuser_id']) && !empty($data['abuser'])) {
            $abuser = AbuserService::create($data['abuser']);
            $data['abuser_id'] = $abuser->id;
        }

        // Create the abuser
        /** @var AbuseRelationship $relationship */
        $relationship = AbuseRelationship::create($data);

        $relationship->load(['client', 'abuser']);

        return new JsonResource($relationship);
    }

    /**
     * Display the specified AbuseRelationship.
     * GET|HEAD /abuse-relationships/{id}
     *
     * @param AbuseRelationship $relationship
     * @return JsonResource
     */
    public function show(AbuseRelationship $relationship)
    {
        return new JsonResource($relationship);
    }

    /**
     * Update the specified Client in storage.
     * PUT/PATCH /abuse-relationships/{id}
     *
     * @param AbuseRelationship $relationship
     * @param Request $request
     * @return JsonResource
     */
    public function update(AbuseRelationship $relationship, Request $request)
    {
        $data = $request->all();

        $relationship->update($data);

        return new JsonResource($relationship);
    }

    /**
     * Remove the specified AbuseRelationship from storage.
     * DELETE /abuse-relationships/{id}
     *
     * @param AbuseRelationship $relationship
     * @return JsonResponse|Response
     * @throws \Exception
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy($id)
    {
//        $id = $relationship->id;
        $relationship = AbuseRelationship::findOrFail($id);

        logger('relationship: ' . print_r($relationship->toArray(), true));

        $this->authorize('delete', $relationship);

        $relationship->delete();

        return new JsonResponse(compact('id'));
    }
}
