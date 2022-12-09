<?php

namespace App\Reports;

use Illuminate\Contracts\Support\Arrayable;

class DataRow implements Arrayable
{
    /**
     * @var null|Profile
     */
    public $report = null;
    public $list = null;
    public $label = '';
    public $percent = null;
    public $total = 0;
    public $partial = null;

    public function __construct(Profile $report, $row, $label = null)
    {
        $this->report = $report;

        $this->parseLabel($label, $report);

        $this->total = $row->aggregate;

        if (isset($row->percent)) {
            $this->percent = $row->percent;
        }

        if (isset($row->partial)) {
            $this->partial = $row->partial;
        }
    }

    public function parseLabel($label = null, Profile $report) {
        if (is_null($label)) {
            $label = $this->report->aggregate_null_label;
        }

        elseif ($report->list && isset($report->list[$label])) {
            $label = $report->list[$label];
        }

        $this->label = $label;
    }

    public function toArray()
    {
        $row = [
            'label' => $this->label,
        ];

        if (isset($this->partial)) {
            $row['partial'] = $this->partial;
        }

        $row['total'] = $this->total;

        if (isset($this->percent)) {
            $row['percent'] = $this->percent;
        }
        return $row;
    }
}
