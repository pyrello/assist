<?php

namespace App\Reports;

use App\BaseModel;
use App\Reports\Traits\Joinable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;

class Where extends Model
{
    use Joinable;

    protected $table = 'reporting_wheres';

    protected $casts = [
        'arguments' => 'array'
    ];

    public $fillable = [
        'label',
        'clause_table',
        'clause_column',
        'operator',
        'arguments',
    ];

    public $timestamps = false;

    public function prefix()
    {
        if (!is_null($this->attributes['clause_table'])) {
            return $this->attributes['clause_table'].'.';
        }

        return '';
    }

    public function prefixedColumn()
    {
        return $this->prefix().$this->clause_column;
    }

    public function addWhereToQuery(Builder $query)
    {
        $this->addJoinsToQuery($query);

        switch ($this->operator) {
            case 'in':
                $query = $query->whereIn($this->prefixedColumn(), $this->arguments);
                break;
            case 'not in':
                $query = $query->whereNotIn($this->prefixedColumn(), $this->arguments);
                break;
            default:
                $query = $query->where($this->prefixedColumn(), $this->operator, $this->arguments);
                break;
        }

        return $query;
    }
}
