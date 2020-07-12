<?php

namespace App\Observers;

use App\Abuser;
use App\Client;

class AbuserObserver
{
    /**
     * Function will be triggered when a client is deleting
     *
     * @param Abuser $model
     */
    public function deleting(Abuser $model)
    {
        $model->relationships()->delete();
    }
}
