<?php

namespace App\Http\Controllers\Api;

use App\Activity;
use App\Note;
use App\Service;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ActivityController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Activity::with(['advocate', 'service'])
            ->orderBy('started_at');

        // If a client id was passed, limit the results to that client
        if (!is_null($client_id = $request->get('client_id'))) {
            $query = $query->whereHas('client', function ($q) use ($client_id) {
                $q->where('client_id', '=', $client_id);
            });
        }

        $results = $query->get();

        return $this->success($results, 'Successfully fetched activities');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // If there is not a valid incident_id, then this must fail
        if (!is_null($incident_id = $request->get('incident_id'))) {

            // Get all data
            $data = $request->except('note');

            $service = Service::findOrFail($data['requested_service_id']);

            // If the service doesn't exist, return an error
            if (is_null($service)) {
                return $this->error('No service was found for the name provided. Please select a valid service.');
            }

            // Create the activity
            $activity = new Activity($data);

            // Associate the service
            $activity->service()->associate($service);
            $activity->save();

            if (!is_null($note = $request->get('note')) && $note !== '') {

                $n = new Note([
                    'content' => $note,
                    'client_id' => $activity->client_id,
                    'advocate_id' => $activity->advocate_id,
                ]);

                $activity->notes()->save($n);
            }

            return $this->success($activity, 'Activity saved successfully');
        }
        return $this->error('An activity must be attached a valid incident. No incident was passed with this request.');
    }

    /**
     * Display the specified resource.
     *
     * @param  Activity  $activity
     *
     * @return \Illuminate\Http\Resources\Json\JsonResource
     */
    public function show(Activity $activity)
    {
        $activity->load('service', 'advocate', 'notes');
        return new JsonResource($activity);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Activity $activity)
    {
        // Get all data except the address
        $data = $request->all();

        $activity->update($data);

        return $this->success($activity, 'Activity updated successfully');
    }

    /**
     * Remove the specified Activity from storage.
     * DELETE /activities/{id}
     *
     * @param  Activity  $activity
     * @return JsonResponse
     * @throws \Exception
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Activity $activity)
    {
        $id = $activity->id;

        $this->authorize('delete', $activity);

        $activity->delete();

        return new JsonResponse(compact('id'));
    }
}
