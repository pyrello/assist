<?php

namespace App\Observers;

use App\AbuseRelationship;

class AbuseRelationshipObserver
{
    /**
     * Function will be triggered when a client is deleting
     *
     * @param AbuseRelationship $model
     */
    public function deleted(AbuseRelationship $model)
    {
        $model->load('abuser');

        $abuser = $model->abuser;

        if (!is_null($abuser)) {
            // Check if the abuser has any other relationships and
            // delete if there are none.
            $abuser->load('relationships');

            if ($abuser->relationships->count() < 1) {
                $abuser->delete();
            }
        }
    }
}
