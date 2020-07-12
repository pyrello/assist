<?php

namespace App\Policies;

use App\Advocate;
use App\ReportProfile;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProfilePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the reportProfile.
     *
     * @param  \App\Advocate  $user
     * @param  \App\ReportProfile  $reportProfile
     * @return mixed
     */
    public function view(Advocate $user, ReportProfile $reportProfile)
    {
        //
    }

    /**
     * Determine whether the user can create reportProfiles.
     *
     * @param  \App\Advocate  $user
     * @return mixed
     */
    public function create(Advocate $user)
    {
        //
    }

    /**
     * Determine whether the user can update the reportProfile.
     *
     * @param  \App\Advocate  $user
     * @param  \App\ReportProfile  $reportProfile
     * @return mixed
     */
    public function update(Advocate $user, ReportProfile $reportProfile)
    {
        //
    }

    /**
     * Determine whether the user can delete the reportProfile.
     *
     * @param  \App\Advocate  $user
     * @param  \App\ReportProfile  $reportProfile
     * @return mixed
     */
    public function delete(Advocate $user, ReportProfile $reportProfile)
    {
        return $user->is_admin;
    }
}
