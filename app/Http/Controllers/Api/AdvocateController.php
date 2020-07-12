<?php

namespace App\Http\Controllers\Api;

use App\Advocate;
use App\Http\Resources\Advocate as AdvocateResource;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Response;

/**
 * Class AdvocateController
 * @package App\Http\Controllers\Api
 */

class AdvocateController extends BaseController
{
    /**
     * Display a listing of the Advocate.
     * GET|HEAD /advocates
     *
     * @param Request $request
     * @return AdvocateResource|Collection|null|Response
     */
    public function index(Request $request)
    {
        if ($request->has('page')) {
            $advocates = Advocate::orderBy('last_name')->paginate(20);
        } else {
            $advocates = Advocate::orderBy('last_name')->get();
        }
        return AdvocateResource::collection($advocates);
    }

    /**
     * Store a newly created User in storage.
     * POST /states
     *
     * @param Request $request
     *
     * @return AdvocateResource|Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $user = Advocate::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        return new AdvocateResource($user);
    }

    /**
     * Display the specified User.
     * GET|HEAD /states/{id}
     *
     * @param  int $id
     *
     * @return AdvocateResource|Response
     */
    public function show($id)
    {
        /** @var Advocate $user */
        $advocate = Advocate::find($id);

        if (is_null($advocate)) {
            return $this->error('Unable to find advocate');
        }

        return new AdvocateResource($advocate);
    }

    /**
     * Update the specified State in storage.
     * PUT/PATCH /states/{id}
     *
     * @param  int $id
     * @param Request $request
     *
     * @return AdvocateResource|Response
     */
    public function update($id, Request $request)
    {
        /** @var Advocate $advocate */
        $advocate = Advocate::find($id);
        logger('advocate', compact('advocate'));

        // Check if the user exists
        if (empty($advocate)) {
            return $this->error('Advocate not found');
        }

        $data = $request->all();
        logger('data', compact('data'));

        // If we are updating the password, hash it
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }

        $advocate->update($data);

        return new AdvocateResource($advocate);
    }

    /**
     * Remove the specified Advocate from storage.
     * DELETE /advocates/{id}
     *
     * @param Advocate $advocate
     * @return JsonResponse
     * @throws \Exception
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Advocate $advocate)
    {
        $id = $advocate->id;

        $this->authorize('delete', $advocate);

        $advocate->delete();

        return new JsonResponse(compact('id'));
    }
}
