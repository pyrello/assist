<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;
use Illuminate\Http\Resources\MissingValue;

class Abuser extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        $client_id = $request->get('client_id');
        $clientsLoaded = $this->whenLoaded('clients');

        return [
            'id' => $this->id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'full_name' => $this->first_name . ' ' . $this->last_name,
            'gender' => $this->gender,
            'birth_date' => !is_null($this->birth_date) ? (string) $this->birth_date->toDateString() : $this->birth_date,
            'height' => $this->height,
            'weight' => $this->weight,
            'eye_color' => $this->eye_color,
            'hair_color' => $this->hair_color,
            'hair_length' => $this->hair_length,
            'identifying_features' => $this->identifying_features,
            'vehicle' => $this->vehicle,
            'ethnicity_ids' => $this->ethnicity_ids,
            'ethnicity' => $this->ethnicity,
            'clients' => Resource::collection($clientsLoaded),
            'relationship' => $this->whenPivotLoaded('abuser_client', function() {
                return $this->pivot->relationship;
            }),
            'relationships' => $this->whenLoaded('relationships', $this->relationships),
            'client_ids' => $this->whenLoaded('relationships', $this->relationships->pluck('client_id')->all()),
//            'client_id' => $this->when(!is_null($client_id) && $clientsLoaded, $client_id),
//            'client_ids' => $this->when($clientsLoaded, $this->client_ids),
        ];
    }
}
