<?php

namespace App\Reports;

use App\BaseModel;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;
use Symfony\Component\VarDumper\Cloner\VarCloner;

/**
 * Class Join
 * @package App\Reports
 * @property string|null $from_table
 * @property string $from_column
 * @property string $to_table
 * @property string $to_column
 * @property string $operator
 * @property string $type
 */
class Join extends Model
{
    protected $table = 'reporting_joins';

    public $fillable = [
        'label',
        'from_table',
        'from_column',
        'operator',
        'to_table',
        'to_column',
        'type',
        'unique',
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
            info('Adding join', [$this->to_table, $this->to_table.'.'.$this->to_column, $this->operator, $this->prefixedFrom(), $this->type]);
            $operator = (is_null($this->operator)) ? '=' : $this->operator;
            $query = $query->join($this->to_table, $this->to_table.'.'.$this->to_column, $operator, $this->prefixedFrom(), $this->type);
            info ('Query (add joins to query): ' . $query->toSql());
            return $query;
        }

        return $query;
    }

    public function prefixedFrom($table = null)
    {
        $from_table = '';
        if (!is_null($table) && $table !== '') {
            $from_table = $table;
        } elseif (!is_null($this->from_table)) {
            $from_table = $this->from_table;
        }

        info('From table: ' . $from_table);

        return $from_table . '.' . $this->from_column;
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
                if ($join->type == $this->type && $join->table == $this->to_table) {
                    return false;
                }
            }
        }

        return true;
    }
}
