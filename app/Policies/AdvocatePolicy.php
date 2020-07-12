<?php

namespace App\Policies;

use App\Advocate;
use Illuminate\Auth\Access\HandlesAuthorization;

class AdvocatePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the advocate.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Advocate  $advocate
     * @return mixed
     */
    public function view(Advocate $user, Advocate $advocate)
    {
        return $user->is_admin;
    }

    /**
     * Determine whether the user can create advocates.
     *
     * @param  \App\Advocate  $user
     * @return mixed
     */
    public function create(Advocate $user)
    {
        return $user->is_admin;
    }

    /**
     * Determine whether the user can update the advocate.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Advocate  $advocate
     * @return mixed
     */
    public function update(Advocate $user, Advocate $advocate)
    {
        return $user->is_admin;
    }

    /**
     * Determine whether the user can delete the advocate.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Advocate  $advocate
     * @return mixed
     */
    public function delete(Advocate $user, Advocate $advocate)
    {
        return $user->is_admin;
    }
}
