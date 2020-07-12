<?php

namespace App\Reports;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;
use Mockery\Exception;

abstract class ModelWithQueries extends Model
{
    protected $appends = ['queries'];

    /**
     * @var Builder[]
     */
    protected $queries = [];

    protected $defaultQueryName = 'default';

    public function addQuery(Builder $query, $name = null) {
        if (is_null($name)) {
            $name = $this->defaultQueryName;
        }

        $this->queries[$name] = $query;
    }

    public function getQuery($name = null) {
        if (is_null($name)) {
            $name = $this->defaultQueryName;
        }

        if (isset($this->queries[$name])) {
            return $this->queries[$name];
        }

        return false;
    }

    public function cloneQuery($name = null) {
        if ($query = $this->getQuery($name)) {
            return clone $query;
        }

        throw new Exception("$name query has not been initialized.");
    }

    public function hasQuery($name = null) {
        return $this->getQuery($name);
    }

    public function getTableName($name) {
        if (is_numeric($pos = strpos($name, '.'))) {
            return substr($name, 0, $pos);
        }
        return $name;
    }

    public function getColumnName($name) {
        if (is_numeric($pos = strpos($name, '.'))) {
            return substr($name, $pos+1);
        }
        return $name;
    }

    public function getTableAbbr($table, $modifier = null)
    {
        return substr($table, 0, 2) . $modifier ?: '';
    }

    public function getQueriesAttribute()
    {
        return array_map(function($q) {
            return $q->toSql();
        }, $this->queries);
    }
}
