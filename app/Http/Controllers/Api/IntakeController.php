<?php

namespace App\Http\Controllers\Api;

use App\Abuser;
use App\AbuseRelationship;
use App\Address;
use App\Client;
use App\Ethnicity;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreIntake;
use App\Intake;
use App\Phone;
use App\Http\Resources\Intake as IntakeResource;
use App\Services\IntakeService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\Resource;
use Illuminate\Http\JsonResponse;

class IntakeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $intakes = Intake::all();

        return Resource::collection($intakes);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreIntake $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function store(StoreIntake $request)
    {
        $data = $request->all();

        $resources = IntakeService::create($data);

        return Resource::collection(new Collection($resources));
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return IntakeResource
     */
    public function show($id)
    {
        $intake = Intake::with('client', 'notes', 'abuseRelationships.abuser')->findOrFail($id);
//        $intake->load('client', 'notes');

        return new Resource($intake);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified Intake from storage.
     * DELETE /intakes/{id}
     *
     * @param Intake $intake
     * @return JsonResponse
     * @throws \Exception
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Intake $intake)
    {
        $id = $intake->id;

        $this->authorize('delete', $intake);

        $intake->delete();

        return new JsonResponse(compact('id'));
    }
}
