<?php

namespace App\Http\Controllers\Api;

use App\Activity;
use App\Outcome;
use App\Service;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\Resource;

class OutcomeController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = $request->all();
        $activity_id = $request->get('activity_id');

        $outcomes = Outcome::query();

        if (!is_null($activity_id)) {
            $activity = Activity::with('service')->find($activity_id);
            $outcomes = $outcomes->whereHas('services', function($query) use ($activity) {
                $query->where('name', '=', $activity->service_name);
            });
        }
        $outcomes = $outcomes->get();

        return Resource::collection($outcomes);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return OutcomeResource|\Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Get all data except the service names
        //$service_ids = $request->get('services_ids');
        $data = $request->except('services_ids');

        // Create the client
        $outcome = Outcome::create($data);

        //$services = Service::findOrFail($service_ids);

        //$outcome->services()->attach($services);

        //$outcome->load('services');

        return new Resource($outcome);
    }

    /**
     * Display the specified resource.
     *
     * @param Outcome $outcome
     * @return OutcomeResource|\Illuminate\Http\Response
     */
    public function show(Outcome $outcome)
    {
        return new Resource($outcome);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Outcome $outcome
     * @return OutcomeResource|\Illuminate\Http\Response
     */
    public function update(Request $request, Outcome $outcome)
    {
        // Get all data except the service names
        $service_ids = $request->get('services_ids');
        $data = $request->except('services_ids');

        $outcome->update($data);

        logger('Services ids', compact('services'));
        // Update services if they are passed through
        if (!is_null($service_ids)) {
            $services = Service::findOrFail($service_ids);

            $outcome->services()->sync($services);
        }

        $outcome->load('services');

        return new Resource($outcome);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        /** @var Outcome $outcome */
        $outcome = Outcome::find($id);

        if (is_null($outcome)) {
            return $this->error('Outcome not found');
        }

        $outcome->delete();

        return $this->success(compact('id'), 'Outcome deleted successfully');
    }
}
