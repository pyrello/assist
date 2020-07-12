<?php

namespace App\Policies;

use App\AbuseRelationship;
use App\Advocate;
use App\Abuser;
use Illuminate\Auth\Access\HandlesAuthorization;

class AbuseRelationshipPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the abuser.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Abuser  $abuser
     * @return mixed
     */
    public function view(Advocate $user, Abuser $abuser)
    {
        //
    }

    /**
     * Determine whether the user can create abusers.
     *
     * @param  \App\Advocate  $user
     * @return mixed
     */
    public function create(Advocate $user)
    {
        //
    }

    /**
     * Determine whether the user can update the abuser.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Abuser  $abuser
     * @return mixed
     */
    public function update(Advocate $user, Abuser $abuser)
    {
        //
    }

    /**
     * Determine whether the user can delete the abuser.
     *
     * @param  \App\Advocate $user
     * @param AbuseRelationship $abuseRelationship
     * @return mixed
     */
    public function delete(Advocate $user, AbuseRelationship $abuseRelationship)
    {
        return $user->is_admin;
    }
}
