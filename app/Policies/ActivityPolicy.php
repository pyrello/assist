<?php

namespace App\Policies;

use App\Advocate;
use App\Activity;
use Illuminate\Auth\Access\HandlesAuthorization;

class ActivityPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the activity.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Activity  $activity
     * @return mixed
     */
    public function view(Advocate $user, Activity $activity)
    {
        //
    }

    /**
     * Determine whether the user can create activities.
     *
     * @param  \App\Advocate  $user
     * @return mixed
     */
    public function create(Advocate $user)
    {
        //
    }

    /**
     * Determine whether the user can update the activity.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Activity  $activity
     * @return mixed
     */
    public function update(Advocate $user, Activity $activity)
    {
        //
    }

    /**
     * Determine whether the user can delete the activity.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Activity  $activity
     * @return mixed
     */
    public function delete(Advocate $user, Activity $activity)
    {
        return $user->is_admin;
    }
}
