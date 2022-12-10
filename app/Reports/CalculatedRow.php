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
        'reporting_profile_id',
        'label',
        'data_table',
        'data_column',
    ];

    protected $appends = ['queries', 'data'];
    protected $hidden = ['wheres', 'joins', 'profile'];

    protected $table = 'reporting_calculated_rows';

    public $timestamps = false;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function profile()
    {
        return $this->belongsTo(Profile::class, 'reporting_profile_id');
    }

    public function build(Profile $profile = null)
    {
        if (!is_null($profile)) {
            $this->setRelation('profile', $profile);
        } else {
            if (!$this->relationLoaded('profile')) {
                $this->load('profile');
            }
            /** @var Profile $profile */
            $profile = $this->profile;
        }


        // Get ID field and filters from Report to set fields to pull back
        /** @var Builder $query */
        $query = $profile->cloneQuery('base')
            ->addSelect($profile->base_table . '.' . $profile->aggregate_column)
            ->addSelect($profile->base_table . '.' . $profile->start_column);
//            ->where($profile->base_table . '.' . $profile->date_column, '=', function (Builder $q) use ($profile) {
//                /** Builder $q */
//                $q->from($profile->base_table . ' as bt2')
//                    ->selectRaw('max(`bt2`.`' . $profile->date_column . '`)')
//                    ->whereColumn($profile->base_table . '.' . $profile->aggregate_column, '=', 'bt2.' . $profile->aggregate_column);
//            });

        $this->addWheresToQuery($query);

        $this->addQuery($query);

        /** @var Collection $results */
        $this->data = $query->get();

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
