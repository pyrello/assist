<?php

namespace App\Observers;

use App\Client;

class ClientObserver
{
    /**
     * Function will be triggered when a client is saving
     *
     * @param Client $model
     */
    public function saving(Client $model)
    {
        $model->anonymous = $model->anonymousCheck();
    }

    /**
     * Function will be triggered when a client is deleting
     *
     * @param Client $model
     */
    public function deleting(Client $model)
    {
        // Delete the client's address
        $model->address()->delete();

        // Delete any abuse relationships
        foreach ($model->abuseRelationships as $relationship) {
            $relationship->delete();
        }
    }
}
