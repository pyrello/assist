<?php

namespace App\Policies;

use App\Advocate;
use App\Note;
use App\Phone;
use Illuminate\Auth\Access\HandlesAuthorization;

class PhonePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the note.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Note  $note
     * @return mixed
     */
    public function view(Advocate $user, Note $note)
    {
        //
    }

    /**
     * Determine whether the user can create notes.
     *
     * @param  \App\Advocate  $user
     * @return mixed
     */
    public function create(Advocate $user)
    {
        //
    }

    /**
     * Determine whether the user can update the note.
     *
     * @param  \App\Advocate  $user
     * @param  \App\Note  $note
     * @return mixed
     */
    public function update(Advocate $user, Note $note)
    {
        //
    }

    /**
     * Determine whether the user can delete the note.
     *
     * @param  \App\Advocate $user
     * @param Phone $phone
     * @return mixed
     */
    public function delete(Advocate $user, Phone $phone)
    {
        return $user->is_admin;
    }
}
