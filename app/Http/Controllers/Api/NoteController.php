<?php

namespace App\Http\Controllers\Api;

use App\Note;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NoteController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Note::with(['noteable', 'advocate']);

        // If a client id was passed, limit the results to that client
        if (!is_null($client_id = $request->get('client_id'))) {
            $query = $query->where('client_id', '=', $client_id);
        }

        if (!is_null($noteable_id = $request->get('noteable_id'))) {
            $query = $query->where('noteable_id', '=', $noteable_id);
        }

        if (!is_null($noteable_type = $request->get('noteable_type'))) {
            $query = $query->where('noteable_type', '=', $noteable_type);
        }

        $notes = $query->get();

        return $this->success($notes, 'Retrieved notes');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $note = Note::create($data);

        $note->load(['noteable', 'advocate']);

        return $this->success($note, 'Created note');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Note $note
     * @return JsonResource
     */
    public function show(Note $note)
    {
        $note->load(['noteable', 'advocate']);

        return new JsonResource($note);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Note $note
     * @return JsonResource
     */
    public function update(Request $request, Note $note)
    {
        $data = $request->all();

        $note->update($data);
        $note->load(['noteable', 'advocate']);

        return new JsonResource($note);
    }

    /**
     * Remove the specified Note from storage.
     * DELETE /notes/{id}
     *
     * @param Note $note
     * @return JsonResponse
     * @throws \Exception
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Note $note)
    {
        $id = $note->id;

        $this->authorize('delete', $note);

        $note->delete();

        return new JsonResponse(compact('id'));
    }
}
