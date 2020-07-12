<?php

namespace App\Policies;

use App\Advocate;
use App\Intake;
use Illuminate\Auth\Access\HandlesAuthorization;

class IntakePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the intake.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Intake  $intake
     * @return mixed
     */
    public function view(Advocate $user, Intake $intake)
    {
        //
    }

    /**
     * Determine whether the user can create intakes.
     *
     * @param  \App\Advocate  $user
     * @return mixed
     */
    public function create(Advocate $user)
    {
        //
    }

    /**
     * Determine whether the user can update the intake.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Intake  $intake
     * @return mixed
     */
    public function update(Advocate $user, Intake $intake)
    {
        //
    }

    /**
     * Determine whether the user can delete the intake.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Intake  $intake
     * @return mixed
     */
    public function delete(Advocate $user, Intake $intake)
    {
        return $user->is_admin;
    }
}
