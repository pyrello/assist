<?php

namespace App\Policies;

use App\Advocate;
use App\Interaction;
use Illuminate\Auth\Access\HandlesAuthorization;

class InteractionPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the interaction.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Interaction  $interaction
     * @return mixed
     */
    public function view(Advocate $user, Interaction $interaction)
    {
        //
    }

    /**
     * Determine whether the user can create interactions.
     *
     * @param  \App\Advocate  $user
     * @return mixed
     */
    public function create(Advocate $user)
    {
        //
    }

    /**
     * Determine whether the user can update the interaction.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Interaction  $interaction
     * @return mixed
     */
    public function update(Advocate $user, Interaction $interaction)
    {
        //
    }

    /**
     * Determine whether the user can delete the interaction.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Interaction  $interaction
     * @return mixed
     */
    public function delete(Advocate $user, Interaction $interaction)
    {
        return $user->is_admin;
    }
}
