<?php

namespace App\Reports;

use App\Reports\Counters\BasicCounter;
use App\Reports\Traits\Joinable;
use App\Reports\Traits\Whereable;
use App\Services\CsvCreator;
use App\Services\ZipCreator;
use Carbon\Carbon;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Collection;

/**
 * Class Profile
 *
 * @package App\Reports
 * @property string $base_table
 * @property string $aggregate_column
 * @property string $start_column
 * @property string|null $end_column
 * @property string $aggregate_null_label
 * @property LabelList|null $label_list
 */
class Profile extends ModelWithQueries
{
    use Joinable, Whereable;

    /**
     * @var null|array
     */
    public $report_data = null;

    protected $queryInitialized = false;
    protected $initialized = false;

    protected $built = false;

    protected $counter = null;
    protected $start_date = null;
    protected $end_date = null;

    public $fillable = [
        'label',
        'base_table',
        'aggregate_column',
        'start_column',
        'end_column',
        'aggregation_type',
        'percent_column',
        'percent_value',
        'include_zero_rows',
        'excluded_rows',
        'aggregate_null_label',
    ];

    protected $appends = ['report_data', 'total', 'list', 'queries'];
//    protected $hidden = ['wheres', 'joins'];

    public $timestamps = false;

    public $table = 'reporting_profiles';
    public $total = 0;
    protected $casts = [
        'excluded_rows' => 'array'
    ];

    public function __construct(array $attributes = [])
    {
        $this->report_data = collect();
        parent::__construct($attributes);
    }

    /**
     * Calculated Rows
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function calculatedRows()
    {
        return $this->hasMany(CalculatedRow::class, 'reporting_profile_id');
    }

    /**
     * List for providing labels
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function labelList()
    {
        return $this->belongsTo(LabelList::class);
    }

    public function getListAttribute()
    {
        if (is_null($this->labelList)) {
            return false;
        }

        return $this->labelList->list;
    }

    /**
     * Accessor for $report_data attribute
     *
     * @return null|array
     */
    public function getReportDataAttribute()
    {
        return $this->report_data;
    }

    /**
     * Build the report from the provided elements
     *
     * @param $start_date
     * @param null $end_date
     * @return $this
     */
    public function build($start_date, $end_date = null)
    {
        if (is_null($end_date)) {
            $end_date = Carbon::now();
        }
        $this->start_date = $start_date;
        $this->end_date = $end_date;
        $this->load(['joins', 'wheres']);

        if (!$this->hasQuery('base')) {
            $this->initBaseQuery($start_date, $end_date);
        }

        $this->init();

        $this->fetchData();

        $this->built = true;

        return $this;
    }

    public function init()
    {
        // Initialize the list query and get the list
        $this->initListQuery();

        // Initialize the data query and get the data
        $this->initDataQuery();

        if (!$this->calculatedRows->isEmpty()) {
            $this->initCompareQuery();
        }

        $this->initialized = true;
    }

    public function initBaseQuery($start_date, $end_date)
    {
        $query = $this->newBaseQueryBuilder()
            ->from($this->base_table)
            // Add the start and end date from the profile
            ->whereDate($this->dateColumn(), '>', $start_date)
            ->whereDate($this->dateColumn(), '<=', $end_date)
            // todo: investigate alternate way of getting this query
//            ->where($this->dateColumn(), '=', function (Builder $q) {
//                /** Builder $q */
//                $q->from($this->base_table . ' as bt2')
//                    ->selectRaw('max(' . $this->prefixedColumn($this->date_column, 'bt2') . ')')
//                    ->whereColumn($this->aggregateColumn(), '=', $this->prefixedColumn($this->aggregate_column, 'bt2'));
//            })
            ->distinct();

        $this->addWheresToQuery($query);
        $this->addJoinsToQuery($query);

        $this->addQuery($query, 'base');
    }

    public function initListQuery()
    {
        if (!$this->relationLoaded('labelList')) {
            $this->load('labelList');
        }
        if (!is_null($this->labelList)) {
            $this->labelList->initList();
        }
    }

    public function initDataQuery()
    {
        $query = $this->cloneQuery('base')
            ->addSelect($this->aggregateColumn())
            ->groupBy($this->aggregateColumn());

        if ($this->aggregation_type === 'count') {
            $query = $query
                ->addSelect(\DB::raw('count(*) as aggregate'));
        } elseif ($this->aggregation_type === 'sum') {
            $query = $query
                ->addSelect(\DB::raw('SUM(TIMESTAMPDIFF(HOUR, ' . $this->start_column . ', ' . $this->end_column . ')) as aggregate'));
        } elseif ($this->aggregation_type === 'percent') {
            // SELECT outcome_id, (SUM(IF(completed = 1, 1, 0)) * 100.0 / COUNT(*)) AS percent FROM client_outcome GROUP BY outcome_id;
            $query = $query
                ->addSelect(\DB::raw('count(*) as aggregate'))
                ->addSelect(\DB::raw('SUM(IF(' . $this->percent_column . ' = ' . $this->percent_value . ', 1, 0)) as partial'))
                ->addSelect(\DB::raw('(SUM(IF(' . $this->percent_column . ' = ' . $this->percent_value . ', 1, 0)) * 100.0 / COUNT(*)) AS percent'));
        }

        $this->addJoinsToQuery($query);

        $this
            ->addWheresToQuery($query)
            ->excludeRows($query);

        $this->addQuery($query, 'data');
    }

    public function initCompareQuery()
    {
        $query = $this->cloneQuery('base')
            ->addSelect($this->dateColumn())
            ->addSelect($this->aggregateColumn());
        // todo: investigate alternate way of handling this query
//            ->where($this->profile->base_table . '.' . $this->profile->date_column, '=', function (Builder $q) {
//                /** Builder $q */
//                $q->from($this->profile->base_table . ' as bt2')
//                    ->selectRaw('max(bt2.' . $this->profile->date_column . ')')
//                    ->whereColumn($this->profile->base_table . '.' . $this->profile->aggregate_column, '=', 'bt2.' . $this->profile->aggregate_column);
//            });
        //->groupBy($this->data_table.'.'.$this->aggregate_column);
        $this->addJoinsToQuery($query)
            ->addWheresToQuery($query)
            ->excludeRows($query);

        $this->addQuery($query, 'compare');
    }

    /**
     * Fetch the data for the report
     */
    public function fetchData()
    {
        if (!$this->initialized) {
            $this->init();
        }

        $query = $this->getQuery('data');

        if ($query) {

            // If there are no calculated rows, this is easy
            if ($this->calculatedRows->isEmpty()) {

                $list = $this->list;

                $this->report_data = $query->get();

                $instance = $this;

                $this->report_data = $query->get()->map(function ($row) use ($instance, $list) {
                    $row = new DataRow($instance, $row, $row->{$instance->aggregate_column});
                    $instance->total += $row->total;
                    return $row;
                });
            }
            // If there are calculated rows, we have some work to do
            else {
                $compareQuery = $this->getQuery('compare');

                if ($compareQuery) {
                    $this->compareData = $compareQuery->get();

                    // Remove the items that are not the most recent
                    $this->compareAndRemoveOldest($this->compareData, $this->compareData);

                    $this->buildCalculatedRowsData();

//                    $this->counter->count($this->compareData);

                    $this->addCalculatedRowsToData();
                }
            }
        }
    }

    /**
     * @param Collection $first
     * @param Collection $second
     */
    public function compareAndRemoveOldest(Collection $first, Collection $second)
    {
        if ($dot_pos = strpos($this->start_column, '.') > -1) {
            $date_field = substr($this->start_column, $dot_pos + 1);
        } else {
            $date_field = $this->start_column;
        }

        $sameCollection = $first === $second;

        // Loop through first collection
        foreach ($first as $firstKey => $firstItem) {
            // Loop through second collection
            foreach ($second as $secondKey => $secondItem) {

                // If the records don't have the same id field, continue
                if ($firstItem->{$this->aggregate_column} !== $secondItem->{$this->aggregate_column}) {
                    continue;
                }

                if ($sameCollection && $firstItem === $secondItem) {
                    continue;
                }

                if ($firstItem === $secondItem) {
                    $second->forget($secondKey);
                    break;
                }

                // If the items are equivalent or the row item is not as recent
                if (Carbon::createFromFormat('Y-m-d H:i:s', $secondItem->{$date_field})
                        ->lte(Carbon::createFromFormat('Y-m-d H:i:s', $firstItem->{$date_field})))
                {
                    $second->forget($secondKey);
                } else {
                    $first->forget($firstKey);
                    break;
                }

            }
        }
    }

    public function buildCalculatedRowsData()
    {
        // todo: is this necessary? To check whether this method should be run, these would already be loaded
        if (!$this->relationLoaded('calculatedRows')) {
            $this->load('calculatedRows');
        }

        $this->calculatedRowData = collect();

        /** @var CalculatedRow $row */
        foreach ($this->calculatedRows as $row) {
            /** Collection $rowData */
            if (!is_null($rowData = $row->build($this)->getData())) {

                // Todo: figure out a way to avoid this using SQL
                // https://stackoverflow.com/questions/7118170/sql-server-select-only-the-rows-with-maxdate
                // https://www.xaprb.com/blog/2006/12/07/how-to-select-the-firstleastmax-row-per-group-in-sql/
                $this->compareAndRemoveOldest($rowData, $rowData);

                $this->compareAndRemoveOldest($rowData, $this->compareData);

                foreach($this->calculatedRowData as $cr) {
                    $this->compareAndRemoveOldest($rowData, $cr['data']);
                }

                $this->addCalculatedRow($row->label, $rowData);
            }
        }
    }

    public function addCalculatedRow($label, $data)
    {
        // Only add if there is data or we are including rows with 0
        if ($this->includeZeroRows || $data->count() > 0) {
            $this->calculatedRowData->push(compact('label', 'data'));
        }
    }

    public function addCalculatedRowsToData()
    {
//        $this->counter->count($this->calculatedRowData);
        foreach ($this->calculatedRowData as $rowData) {

            $count = $rowData['data']->count();
            $this->report_data[] = [
                'label' => $rowData['label'],
                'total' => $count,
            ];
            $this->total += $count;
        }
    }

    public function getList()
    {
        if ($query = $this->getQuery('list')) {
            $this->list = $query
                ->pluck($this->list_label_column, $this->list_key_column);
        }
    }

    public function getTotalAttribute()
    {
//        if (!$this->built) {
//            $this->build()->fetchData();
//        }

        return $this->total;
    }

    public function excludeRows(Builder $query)
    {
        if (!is_null($this->excluded_rows)) {
            return $query->whereNotIn($this->aggregateColumn(), $this->excluded_rows);
        }

        return $query;
    }

    public function createAndAttachCalculatedRows(array $rows = [])
    {
        foreach ($rows as $schema) {

            $wheres = isset($schema['wheres']) ? $schema['wheres'] : null;

            unset($schema['wheres']);

            /** @var CalculatedRow $row */
            $row = CalculatedRow::create($schema);

            if (!is_null($wheres)) {
                $row->createAndAttachWheres($wheres);
            }

            $this->calculatedRows()->save($row);

        }
    }

    public function getLabel($item)
    {
        $label = $item->{$this->aggregate_column};
        // Todo: Is this the best way to handle labeling?
        if (!is_null($this->list) && isset($this->list[$item->{$this->aggregate_column}])) {
            $label = $this->list[$item->{$this->aggregate_column}];
        }

        return $label;
    }

    public function download()
    {
        $download = new CsvCreator($this->label, $this->report_data->toArray());

        return $download->getDownload();
    }

    public function aggregateColumn()
    {
        return $this->prefixedColumn($this->aggregate_column);
    }

    public function dateColumn()
    {
        return $this->prefixedColumn($this->start_column);
    }

    public function prefixedColumn($column, $prefix = null)
    {
        // If the $prefix exists, use it, overwriting a
        // prefix if there was one.
        if ($prefix) {
            if (($pos = strpos($column, '.')) > -1) {
                $column = substr($column, $pos + 1);
            }
        }
        // If the $prefix doesn't exist, only use the base_table
        // if there isn't already a prefix.
        else {
            if (strpos($column, '.') > -1) {
                return $column;
            }
            $prefix = $this->base_table;
        }

        return $prefix . '.' . $column;
    }

}
