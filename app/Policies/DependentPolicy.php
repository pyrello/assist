<?php

namespace App\Policies;

use App\Advocate;
use App\Dependent;
use Illuminate\Auth\Access\HandlesAuthorization;

class DependentPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the dependent.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Dependent  $dependent
     * @return mixed
     */
    public function view(Advocate $user, Dependent $dependent)
    {
        //
    }

    /**
     * Determine whether the user can create dependents.
     *
     * @param  \App\Advocate  $user
     * @return mixed
     */
    public function create(Advocate $user)
    {
        //
    }

    /**
     * Determine whether the user can update the dependent.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Dependent  $dependent
     * @return mixed
     */
    public function update(Advocate $user, Dependent $dependent)
    {
        //
    }

    /**
     * Determine whether the user can delete the dependent.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Dependent  $dependent
     * @return mixed
     */
    public function delete(Advocate $user, Dependent $dependent)
    {
        return $user->is_admin;
    }
}
