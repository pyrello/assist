<?php

namespace App\Reports\Counters;

use App\Reports\Section;

interface CounterInterface
{
    public function __construct(Section $section);

    public function count($data);
}
