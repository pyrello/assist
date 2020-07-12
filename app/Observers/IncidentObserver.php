<?php

namespace App\Observers;

use App\Incident;

class IncidentObserver
{
    /**
     * Function will be triggered when an incident is saving
     *
     * @param Incident $model
     */
    public function saving(Incident $model)
    {
        logger('Incident: ' . print_r($model, true));
        if (!is_null($model->date)) {
            // Get the client -> birth_date
            if (!is_null($client = $model->client) && !is_null($birth_date = $client->birth_date)) {
                // Subtract the birth_date from the activities date
                $age = $model->date->diffInYears($birth_date);
                // Set the age from the above value
                $model->client_age = $age;
            }
        }
    }
}
