<?php

namespace App\Observers;

use App\Reports\Section;
use Illuminate\Database\Eloquent\Model;

class ReportSectionObserver
{
    /**
     * Function will be triggered when a section is saving
     *
     * @param Section $model
     */
    public function creating(Section $model)
    {
        info('Creating section');
    }

    /**
     * Function will be triggered when a section is saving
     *
     * @param Section $model
     */
    public function created(Section $model)
    {
        info('Created section');
    }
}
