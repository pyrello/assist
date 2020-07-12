<?php

namespace App\Reports;

use App\BaseModel;
use App\Reports\Traits\Joinable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;

class Where extends Model
{
    use Joinable;

    protected $table = 'report_wheres';

    protected $casts = [
        'arguments' => 'array'
    ];

    public $fillable = [
        'column_table',
        'column',
        'operator',
        'arguments',
        'whereable_id',
        'whereable_type',
    ];

    public $timestamps = false;

    public function prefix()
    {
        if (!is_null($this->attributes['column_table'])) {
            return $this->attributes['column_table'].'.';
        }

        return '';
    }

    public function prefixedColumn()
    {
        return $this->prefix().$this->column;
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
