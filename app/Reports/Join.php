<?php

namespace App\Reports;

use App\BaseModel;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;

class Join extends Model
{
    protected $table = 'report_joins';

    public $fillable = [
        'first_table',
        'field',
        'operator',
        'second',
        'type',
        'unique',
        'joinable_id',
        'joinable_type',
    ];

    public $timestamps = false;

    /**
     * @param Builder $query
     * @return Builder
     */
    public function addJoinToQuery(Builder $query)
    {
        // Check if the join is unique
        if ($this->isUniqueJoin($query)) {
            return $query->join($this->first_table, $this->first_table.'.'.$this->first, $this->operator, $this->prefixedSecond($query->from), $this->type);
        }

        return $query;
    }

    public function prefixedSecond($baseTable = null)
    {
        if (is_null($baseTable) || $baseTable === '') {
            return $this->second;
        }

        return $baseTable . '.' . $this->second;
    }

    /**
     * Check if the join is unique
     *
     * @param Builder $query
     * @return bool
     */
    public function isUniqueJoin(Builder $query)
    {
        if (!is_null($query->joins)) {
            foreach ($query->joins as $join) {
                if ($join->type == $this->type && $join->table == $this->first_table) {
                    return false;
                }
            }
        }

        return true;
    }
}
