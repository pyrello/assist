<?php

namespace App\Policies;

use App\Advocate;
use App\Client;
use Illuminate\Auth\Access\HandlesAuthorization;

class ClientPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the client.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Client  $client
     * @return mixed
     */
    public function view(Advocate $user, Client $client)
    {
        //
    }

    /**
     * Determine whether the user can create clients.
     *
     * @param  \App\Advocate  $user
     * @return mixed
     */
    public function create(Advocate $user)
    {
        //
    }

    /**
     * Determine whether the user can update the client.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Client  $client
     * @return mixed
     */
    public function update(Advocate $user, Client $client)
    {
        //
    }

    /**
     * Determine whether the user can delete the client.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Client  $client
     * @return mixed
     */
    public function delete(Advocate $user, Client $client)
    {
        return $user->is_admin;
    }
}
