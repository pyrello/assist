<?php

namespace App\Http\Controllers\Api;

use App\Dependent;
use App\Http\Resources\Dependent as DependentResource;
use App\Services\DependentService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\Resource;

class DependentController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $query = Dependent::with('ethnicity');

        // If a client id was passed, limit the results to that client
        if (!is_null($client_id = $request->get('client_id'))) {
            $query = $query->whereHas('client', function ($q) use ($client_id) {
                $q->where('clients.id', '=', $client_id);
            });
        } else {
            $query->with('client');
        }

        logger('Dependent SQL: ' . $query->toSql());

        return Resource::collection($query->paginate(20));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return Resource
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $dependent = DependentService::create($data);

        return new Resource($dependent);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Dependent $dependent
     * @return DependentResource
     */
    public function show(Dependent $dependent)
    {
        $dependent->load('ethnicity');
        return new DependentResource($dependent);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Dependent $dependent
     * @return DependentResource
     */
    public function update(Request $request, Dependent $dependent)
    {
        $data = $request->all();

        $dependent = DependentService::update($dependent, $data);

        return new DependentResource($dependent);
    }

    /**
     * Remove the specified Dependent from storage.
     * DELETE /dependents/{id}
     *
     * @param  \App\Dependent $dependent
     * @return JsonResponse
     * @throws \Exception
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Dependent $dependent)
    {
        $id = $dependent->id;

        $this->authorize('delete', $dependent);

        $dependent->delete();

        return new JsonResponse(compact('id'));
    }
}
