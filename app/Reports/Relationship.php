<?php

namespace App\Reports;

class Relationship
{
    public $items = [];

    public $last = '';

    public function __construct($table, $column = '')
    {
        $this->add($table, $column);
    }

    public function add($table, $column = '')
    {
        $this->items[] = compact('table', 'column');
        $this->last = $table;
    }

    public function fullPath()
    {
        return implode(' > ', array_map(function($item) {
            return !empty($item['table']) ? $item['table'] : '';
        }, $this->items));
    }

    public function unshift($table, $column = '')
    {
        $row = compact('table', 'column');
        array_unshift($this->items, $row);
    }

    public function __get($name)
    {
        if ($name === 'fullPath') {
            return $this->fullPath();
        }

        return null;
    }
}
