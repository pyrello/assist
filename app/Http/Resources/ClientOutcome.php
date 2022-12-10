<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class ClientOutcome extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return ['completed' => $this->completed ? true : false] + parent::toArray($request);
    }
}
