<?php

namespace App\Http\Controllers\Api;

use App\ClientOutcome;
use App\Http\Resources\Phone as PhoneResource;
use App\Phone;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PhoneController extends BaseController
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
            $query = $query->whereHas('incident', function ($q) use ($client_id) {
                $q->where('client_id', '=', $client_id);
            });
        }

        $results = $query->get();

        return $this->success($results, 'Successfully fetched outcomes');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return PhoneResource
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $phone = Phone::create($data);

        if ($phone->primary) {
            $phone->client->phones()->where('id', '<>', $phone->id)->update(['primary' => false]);
        }

        return new PhoneResource($phone);

    }

    /**
     * Display the specified resource.
     *
     * @param Phone $phone
     * @return PhoneResource|\Illuminate\Http\Response
     */
    public function show(Phone $phone)
    {
        return new PhoneResource($phone);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Phone $phone
     * @return PhoneResource
     */
    public function update(Request $request, Phone $phone)
    {
        $data = $request->all();

        $previously_primary = $phone->primary;

        $phone->update($data);

        if ($phone->primary && !$previously_primary) {
            $phone->client->phones()->where('id', '<>', $phone->id)->update(['primary' => false]);
        }

        return new PhoneResource($phone);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Phone $phone
     * @return JsonResponse
     * @throws \Exception
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Phone $phone)
    {
        $id = $phone->id;

        $this->authorize('delete', $phone);

        $phone->delete();

        return new JsonResponse(compact('id'));
    }
}
