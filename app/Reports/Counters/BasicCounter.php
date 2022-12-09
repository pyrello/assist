<?php

namespace App\Reports\Counters;

use App\Reports\Section;
use Illuminate\Support\Collection;

class BasicCounter implements CounterInterface
{
    public $section = null;

    public function __construct(Section $section)
    {
        $this->section = $section;
    }

    public function count($data)
    {
        logger('data: ' . print_r($data, true));
        foreach($data as $item) {
            if (is_array($item) && isset($item['label'])) {
                $label = $item['label'];
            }
            else {
                $label = $this->section->getLabel($item);
            }

            if (is_array($item) && isset($item['data']) && $item['data'] instanceof Collection) {
                $this->increment($label, $item['data']->count());
            }
            else {
                $this->increment($label);
            }
        }
    }

    public function increment($key, $step = 1)
    {

        if (!isset($this->section->data[$key])) {
            $this->section->data[$key] = 0;
        }

        $this->section->data[$key] = $this->section->data[$key] + $step;
        $this->section->total = $this->section->total + $step;
    }
}
