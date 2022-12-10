<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\MissingValue;

class Client extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        $lastIncident = $this->whenLoaded('lastIncident');
        $lastIncidentId = ($lastIncident instanceof MissingValue || $lastIncident->isEmpty()) ? null : $lastIncident->first()->id;

        $ethnicityLoaded = $this->whenLoaded('ethnicity');
        $ethnicityIds = ($ethnicityLoaded instanceof MissingValue || $ethnicityLoaded->isEmpty()) ? null : JsonResource::collection($ethnicityLoaded)->pluck('id', 'pivot.order');
        //logger('Ethnicity ids: ' . print_r($ethnicityIds, true));

        $householdLoaded = $this->whenLoaded('household');
        $headOfHousehold = ($householdLoaded instanceof MissingValue) ? null : $this->head_of_household;
        $householdSize = ($householdLoaded instanceof MissingValue) ? null : $this->household_size;

        return [
            'id' => $this->id,
            'parent_id' => $this->parent_id,
            'first_name' => $this->first_name,
            'middle_initial' => $this->middle_initial,
            'last_name' => $this->last_name,
            'full_name' => $this->first_name . ' ' . $this->last_name,
            'last_four' => $this->last_four,
            'gender' => $this->gender,
            'birth_date' => $this->birth_date ? $this->birth_date->toDateString() : $this->birth_date,
            'homeless' => $this->homeless ? true : false,
            'address' => $this->address,
            'phones' => Phone::collection($this->whenLoaded('phones')),
            'primary_phone_number' => $this->primaryPhoneNumber,
            'ethnicity_ids' => $this->when($ethnicityIds, $ethnicityIds),
            'ethnicity' => JsonResource::collection($ethnicityLoaded),
            'intake' => $this->whenLoaded('intake'),
            'intake_id' => $this->intake_id,
            'head_of_household' => $this->when($headOfHousehold, $headOfHousehold),
            'household' => $householdLoaded,
            'household_size' => $this->when($householdSize, $householdSize),
            'last_incident_id' => $this->when(!($lastIncident instanceof MissingValue), $lastIncidentId),
        ];
    }
}
