<?php

namespace App\Policies;

use App\Advocate;
use App\ClientOutcome;
use Illuminate\Auth\Access\HandlesAuthorization;

class ClientOutcomePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the clientOutcome.
     *
     * @param  \App\Advocate  $user
     * @param  \App\ClientOutcome  $clientOutcome
     * @return mixed
     */
    public function view(Advocate $user, ClientOutcome $clientOutcome)
    {
        //
    }

    /**
     * Determine whether the user can create clientOutcomes.
     *
     * @param  \App\Advocate  $user
     * @return mixed
     */
    public function create(Advocate $user)
    {
        //
    }

    /**
     * Determine whether the user can update the clientOutcome.
     *
     * @param  \App\Advocate  $user
     * @param  \App\ClientOutcome  $clientOutcome
     * @return mixed
     */
    public function update(Advocate $user, ClientOutcome $clientOutcome)
    {
        //
    }

    /**
     * Determine whether the user can delete the clientOutcome.
     *
     * @param  \App\Advocate  $user
     * @param  \App\ClientOutcome  $clientOutcome
     * @return mixed
     */
    public function delete(Advocate $user, ClientOutcome $clientOutcome)
    {
        return $user->is_admin;
    }
}
