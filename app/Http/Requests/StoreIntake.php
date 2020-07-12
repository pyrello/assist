<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreIntake extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        logger('data: ' . print_r($this->all(), true));
        return [
            'date' => 'required',
            'advocate_id' => 'required',
            'client.address.county' => 'required',
            'client.address.state' => 'required',
            'phones.*.number' => 'required',
            'phones.*.type' => 'required',
            'abuses.*.relationship' => 'required',
            'abuses.*.abuse_types' => 'required',
            'abuses.*.abuser_id' => 'required_if:abuses.*.addExistingUser,true',
            'incidents.*.incident_type_id' => 'required|numeric',
            'incidents.*.date' => 'required',
            'incidents.*.city' => 'required',
            'incidents.*.state' => 'required',
            'household.size' => 'required_if:client.parent_id,null',
            'dependents.*.name' => 'required',
        ];
    }
}
