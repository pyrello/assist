<?php

namespace App\Observers;

use App\Phone;

class PhoneNumberObserver
{
    /**
     * Function will be triggered when an activities is saving
     *
     * @param Phone $model
     */
    public function saving($model)
    {
        if (!is_null($model->client_id)) {
            $client_id = $model->client_id;
        }
    }
}
