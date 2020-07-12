<?php

namespace App\Reports;

use App\BaseModel;
use App\Reports\Traits\HasQueries;
use App\Reports\Traits\Whereable;
use Carbon\Carbon;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Collection;

class CalculatedRow extends ModelWithQueries
{
    use Whereable;

    public $data;

    public $fillable = [
        'section_id',
        'label',
        'data_table',
        'data_column',
    ];

    protected $appends = ['queries', 'data'];
    protected $hidden = ['wheres', 'joins', 'section'];

    protected $table = 'report_calculated_rows';

    public $timestamps = false;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function section()
    {
        return $this->belongsTo(Section::class);
    }

    public function build(Section $section = null)
    {
        info('CalculatedRow::build() (' . $this->label . ')');
        if (!is_null($section)) {
            $this->setRelation('section', $section);
        } else {
            if (!$this->relationLoaded('section')) {
                $this->load('section');
            }
            if (!$this->relationLoaded('section.profile')) {
                $this->load('section.report');
            }
        }

        /** @var Profile $profile */
        $profile = $this->section->profile;
        //var_dump($this->section);
        //die();

        // Get ID field and filters from Report to set fields to pull back
        /** @var Builder $query */
        $query = $this->section->cloneQuery('report')
            ->addSelect($this->section->profile->base_table . '.' . $this->section->profile->aggregate_column)
            ->addSelect($this->section->data_table . '.' . $this->section->aggregate_column)
            ->addSelect($this->section->profile->base_table . '.' . $this->section->profile->date_column);
//            ->where($this->section->profile->base_table . '.' . $this->section->profile->date_column, '=', function (Builder $q) use ($profile) {
//                /** Builder $q */
//                $q->from($profile->base_table . ' as bt2')
//                    ->selectRaw('max(`bt2`.`' . $profile->date_column . '`)')
//                    ->whereColumn($profile->base_table . '.' . $this->section->profile->aggregate_column, '=', 'bt2.' . $this->section->profile->aggregate_column);
//            });

        $this->addWheresToQuery($query);
        info('C. Row query: ' . print_r($query->toSql(), true));

        $this->addQuery($query);

        /** @var Collection $results */
        $this->data = $query->get();
        info('Calculated row results: ' . print_r($this->data, true));

        return $this;
    }

    public function getData()
    {
        return $this->data;
    }

    public function getDataAttribute()
    {
        return $this->data;
    }
}
