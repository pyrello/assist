<?php

namespace App\Policies;

use App\Advocate;
use App\Incident;
use Illuminate\Auth\Access\HandlesAuthorization;

class IncidentPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the incident.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Incident  $incident
     * @return mixed
     */
    public function view(Advocate $user, Incident $incident)
    {
        //
    }

    /**
     * Determine whether the user can create incidents.
     *
     * @param  \App\Advocate  $user
     * @return mixed
     */
    public function create(Advocate $user)
    {
        //
    }

    /**
     * Determine whether the user can update the incident.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Incident  $incident
     * @return mixed
     */
    public function update(Advocate $user, Incident $incident)
    {
        //
    }

    /**
     * Determine whether the user can delete the incident.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Incident  $incident
     * @return mixed
     */
    public function delete(Advocate $user, Incident $incident)
    {
        return $user->is_admin;
    }
}
