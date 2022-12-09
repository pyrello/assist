<?php

namespace App\Reports;

use App\BaseModel;
use App\Reports\Traits\Joinable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;

/**
 * Class LabelList
 * @package App\Reports
 * @property string $label
 * @property string $list_table
 * @property string $key_column
 * @property string $label_column
 */
class LabelList extends ModelWithQueries
{
    protected $table = 'reporting_lists';

    public $fillable = [
        'label',
        'list_table',
        'key_column',
        'label_column',
    ];

    public $list = [];
    public $timestamps = false;

    public function initList()
    {
        $query = $this->newBaseQueryBuilder()
            ->from($this->list_table);

        $this->addQuery($query);

        $this->list = $query
            ->pluck($this->label_column, $this->key_column);
    }
}
