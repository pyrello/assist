<?php

namespace App\Http\Controllers\Api;

use App\Client;
use App\Http\Requests\CreateIncidentRequest;
use App\Advocate;
use App\Incident;
use App\IncidentType;
use App\Note;
use App\Http\Resources\Incident as IncidentResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IncidentController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection|\Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Incident::with(['advocate', 'type', 'notes']);

        // If a client id was passed, limit the results to that client
        if (!is_null($client_id = $request->get('client_id'))) {
            $query = $query->whereHas('client', function ($q) use ($client_id) {
                $q->where('clients.id', '=', $client_id);
            });
        } else {
            $query->with('client');
        }

        return JsonResource::collection($query->paginate(20));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  CreateIncidentRequest $request
     * @return JsonResource
     */
    public function store(CreateIncidentRequest $request)
    {
        $client_id = $request->get('client_id');

        $client = Client::findOrFail($client_id);

        $advocate_id = $request->get('advocate_id');

        $advocate = Advocate::findOrFail($advocate_id);

        // Get all data except the client_id
        $data = $request->except(['note', 'referred_by', 'type']);

        //$data['client_age'] = $client->age;
        info('Data: ' . print_r($data, true));

        // Ensure the incident type exists
        $type = IncidentType::findOrFail($data['incident_type_id']);

        // Create the incident
        $incident = new Incident($data);
        $incident->save();

        if (!is_null($note = $request->get('note')) && $note !== '') {

            info('Note: ' . print_r($note, true));

            $n = new Note([
                'content' => $note,
                'advocate_id' => $advocate_id,
                'client_id' => $client_id,
            ]);

            $incident->notes()->save($n);
        }

        $incident->load('advocate', 'type', 'notes.advocate');

        return new JsonResource($incident);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Incident  $incident
     * @return JsonResource
     */
    public function show(Incident $incident)
    {
        $incident->load('advocate', 'type', 'notes.advocate');
        return new JsonResource($incident);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Incident $incident
     * @return JsonResource
     */
    public function update(Request $request, Incident $incident)
    {
        // Get all data except the client_id
        $data = $request->except(['notes', 'type']);

        //$data['victim_age'] = $client->age;
        info('Data: ' . print_r($data, true));

        if (!empty($data)) {

            if (isset($data['incident_type_id'])) {
                // Ensure the incident type exists
                $type = IncidentType::findOrFail($data['incident_type_id']);
            }

            $incident->update($data);
        }

        // If the note is being updated
        if (!is_null($note = $request->get('notes'))) {

            // If there is already a note, update it
            if (!is_null($n = $incident->notes()->first())) {
                $n->update($note);
            }
            // If not, this is a new note.
            else {
                $note['client_id'] = $incident->client_id;

                $n = new Note($note);

                $incident->notes()->save($n);
            }
        }

        $incident->load('advocate', 'type', 'notes');

        return new JsonResource($incident);
    }

    /**
     * Remove the specified Incident from storage.
     * DELETE /incidents/{id}
     *
     * @param Incident $incident
     * @return JsonResponse
     * @throws \Exception
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy($id)
    {
//        $id = $incident->id;
        $incident = Incident::findOrFail($id);

        $this->authorize('delete', $incident);

        $incident->delete();

        return new JsonResponse(compact('id'));
    }
}
