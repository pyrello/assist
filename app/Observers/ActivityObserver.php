<?php

namespace App\Observers;

use App\Activity;

class ActivityObserver
{
    /**
     * Function will be triggered when an activities is saving
     *
     * @param Activity $model
     */
    public function saving($model)
    {
        if (!is_null($model->started_at)) {
            // Get the client -> birth_date
            if (!is_null($client = $model->client) && !is_null($birth_date = $client->birth_date)) {
                // Subtract the birth_date from the activities date
                $age = $model->started_at->diffInYears($birth_date);
                // Set the age from the above value
                $model->client_age = $age;
            }
        }
    }
}
