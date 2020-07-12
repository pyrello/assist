<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;
use Illuminate\Http\Resources\MissingValue;

class Dependent extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        $ethnicityLoaded = $this->whenLoaded('ethnicity');
        $ethnicityIds = ($ethnicityLoaded instanceof MissingValue || $ethnicityLoaded->isEmpty()) ? null : Resource::collection($ethnicityLoaded)->pluck('id', 'pivot.order');

        return [
            'id' => $this->id,
            'client_id' => $this->client_id,
            'advocate_id' => $this->advocate_id,
            'name' => $this->name,
            'gender' => $this->gender,
            'birth_date' => $this->birth_date ? $this->birth_date->toDateString() : $this->birth_date,
            'ethnicity_ids' => $this->when($ethnicityIds, $ethnicityIds),
            'ethnicity' => $this->ethnicity,
            'housing_status' => $this->housing_status,
            'client' => $this->whenLoaded('client'),
        ];
    }
}
