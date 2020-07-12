<?php

namespace App\Http\Controllers\Api;

use App\ClientOutcome;
use App\Http\Resources\ClientOutcome as ClientOutcomeResource;
use App\Note;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\Resource;

class ClientOutcomeController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = ClientOutcome::query();

        // If a client id was passed, limit the results to that client
        if (!is_null($client_id = $request->get('client_id'))) {
            $query = $query->whereHas('client', function ($q) use ($client_id) {
                $q->where('client_id', '=', $client_id);
            });
        }

        $results = $query->get();

        return ClientOutcomeResource::collection($results);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->except('note');

        $clientOutcome = new ClientOutcome($data);

        $clientOutcome->save();

        if (!is_null($note = $request->get('note')) && $note !== '') {

            $n = new Note([
                'content' => $note,
                'client_id' => $clientOutcome->client_id,
                'advocate_id' => $clientOutcome->advocate_id,
            ]);

            $clientOutcome->notes()->save($n);
        }

        return new ClientOutcomeResource($clientOutcome);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(ClientOutcome $clientOutcome)
    {
        return new ClientOutcomeResource($clientOutcome);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param ClientOutcome $clientOutcome
     * @return Resource
     */
    public function update(Request $request, ClientOutcome $clientOutcome)
    {
        $data = $request->all();

        $clientOutcome->update($data);

        return new ClientOutcomeResource($clientOutcome);
    }

    /**
     * Remove the specified ClientOutcome from storage.
     *
     * @param $id
     * @return JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy($id)
    {
        $clientOutcome = ClientOutcome::findOrFail($id);

        $this->authorize('delete', $clientOutcome);

        $clientOutcome->delete();

        return new JsonResponse(compact('id'));
    }
}
