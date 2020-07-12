<?php

namespace App\Reports\Traits;

use Illuminate\Database\Query\Builder;

trait HasQueries
{
    /**
     * @var Builder[]
     */
    public $queries = [];
}
