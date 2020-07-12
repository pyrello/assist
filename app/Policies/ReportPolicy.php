<?php

namespace App\Policies;

use App\Advocate;
use App\ReportsReport;
use Illuminate\Auth\Access\HandlesAuthorization;

class ReportPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the reportsReport.
     *
     * @param  \App\Advocate  $user
     * @param  \App\ReportsReport  $reportsReport
     * @return mixed
     */
    public function view(Advocate $user, ReportsReport $reportsReport)
    {
        //
    }

    /**
     * Determine whether the user can create reportsReports.
     *
     * @param  \App\Advocate  $user
     * @return mixed
     */
    public function create(Advocate $user)
    {
        //
    }

    /**
     * Determine whether the user can update the reportsReport.
     *
     * @param  \App\Advocate  $user
     * @param  \App\ReportsReport  $reportsReport
     * @return mixed
     */
    public function update(Advocate $user, ReportsReport $reportsReport)
    {
        //
    }

    /**
     * Determine whether the user can delete the reportsReport.
     *
     * @param  \App\Advocate  $user
     * @param  \App\ReportsReport  $reportsReport
     * @return mixed
     */
    public function delete(Advocate $user, ReportsReport $reportsReport)
    {
        return $user->is_admin;
    }
}
