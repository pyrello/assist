<?php

namespace App\Reports;

use App\Reports\Traits\Joinable;
use App\Reports\Traits\Whereable;
use Carbon\Carbon;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Collection;

/**
 * Class Section
 *
 * @package App\Reports
 * @property Profile $profile
 * @property string $data_table
 * @property string $aggregate_column
 * @property string $date_column
 * @property Collection $calculatedRows
 */
class Section extends ModelWithQueries
{
    use Joinable, Whereable;

    public $data = null;
    public $compareData;
    public $list;
    public $fillable = [
        'report_id',
        'label',
        'list_table',
        'list_key_column',
        'list_label_column',
        'data_table',
        'data_key_column',
        'aggregate_column',
        'order_by',
        'excluded_rows',
    ];
    public $timestamps = false;
    protected $table = 'report_sections';
    protected $appends = ['data', 'total', 'queries'];
    protected $hidden = ['wheres', 'joins', 'profile'];
    protected $casts = [
        'excluded_rows' => 'array'
    ];

    /**
     * A flag indicating whether the section has been built yet.
     *
     * @var bool
     */
    protected $built = false;
    protected $initialized = false;

    /**
     * Storage for calculated rows.
     *
     * @var Collection
     */
    protected $calculatedRowData;

    /**
     * A flag indicating whether to include rows with no data.
     *
     * @var bool
     */
    protected $includeZeroRows = false;
    protected $total = 0;

    public function profile()
    {
        return $this->belongsTo(Profile::class);
    }

    public function getDataAttribute()
    {
        if (!$this->built) {
            $this->build()->fetchData();
        }

        return $this->data;
    }

    public function fetchData()
    {
        info('Section::fetchData()');
        if (!$this->initialized) {
            info('Not initialized');
            $this->init();
        }

        $data = [];

        $query = $this->getQuery('data');

        if ($query) {

            // If there are no calculated rows, this is easy
            if ($this->calculatedRows->isEmpty()) {

                foreach ($query->get() as $row) {
                    // Todo: Is this the best way to handle labeling?
                    $label = $row->{$this->aggregate_column};
                    if (!is_null($this->list) && isset($this->list[$row->{$this->aggregate_column}])) {
                        $label = $this->list[$row->{$this->aggregate_column}];
                    }

                    $data[$label] = $row->aggregate;
                    $this->total += $row->aggregate;
                }
                $this->data = $data;
            }
            // If there are calculated rows, we have some work to do
            else {
                $compareQuery = $this->getQuery('compare');

                if ($compareQuery) {
                    $this->compareData = $compareQuery->get();

                    // Remove the items that are not the most recent
                    $this->compareAndRemoveOldest($this->compareData, $this->compareData);

                    $this->buildCalculatedRowsData();

                    foreach($this->compareData as $item) {
                        $label = $item->{$this->aggregate_column};
                        // Todo: Is this the best way to handle labeling?
                        if (!is_null($this->list) && isset($this->list[$item->{$this->aggregate_column}])) {
                            $label = $this->list[$item->{$this->aggregate_column}];
                        }

                        if (!isset($data[$label])) {
                            $data[$label] = 0;
                        }

                        $data[$label]++;
                        $this->total++;

                    }

                    $this->data = $data;

                    $this->addCalculatedRowsToData();
                }
            }
        }
    }

    public function init(Profile $profile = null)
    {
        info('Section::init()');
        $this->initReportQuery($profile);

        // Initialize the list query and get the list
        $this->initListQuery();

        // Initialize the data query and get the data
        $this->initDataQuery();

        if (!$this->calculatedRows->isEmpty()) {
            info('Initializing compare query');
            $this->initCompareQuery();
        }

        $this->initialized = true;
    }

    /**
     * @param Profile|null $profile
     */
    public function initReportQuery(Profile $profile = null)
    {
        info('Section::initReportQuery()');

        // If a report has been passed in, set it as the relation
        // so that we continue to reference the same report. Otherwise,
        // load the relationship.

        if (!is_null($profile)) {
            $this->setRelation('profile', $profile);
        } else {
            if (!$this->relationLoaded('profile')) {
                $this->load('profile');
            }
        }

        //var_dump($this->profile);

        $this->addQuery($this->profile->cloneQuery(), 'report');
        $this->addJoinsToQuery($this->getQuery('report'));
    }

    public function initListQuery()
    {
        info('Section::initListQuery()');
        if (!is_null($this->list_table)) {
            $query = $this->newBaseQueryBuilder()
                ->from($this->list_table);

            $this->addQuery($query, 'list');
        }
    }

    public function initDataQuery()
    {
        info('Section::initDataQuery()');
        $query = $this->cloneQuery('report')
            ->addSelect(\DB::raw('count(*) as aggregate'))
            ->addSelect($this->aggregateColumn())
            ->groupBy($this->aggregateColumn());

        $this->addJoinsToQuery($query)
            ->addWheresToQuery($query)
            ->excludeRows($query);

        $this->addQuery($query, 'data');
    }

    public function initCompareQuery()
    {
        info('Section::initCompareQuery()');
        info('$this->profile->base_table.$this->profile->aggregate_column: ' . print_r($this->profile->aggregateColumn(), true));
        info('$this->data_table.$this->aggregate_column: ' . print_r($this->aggregateColumn(), true));
        $query = $this->cloneQuery('report')
            ->addSelect($this->profile->aggregateColumn())
            ->addSelect($this->profile->dateColumn())
            ->addSelect($this->aggregateColumn());
//            ->where($this->profile->base_table . '.' . $this->profile->date_column, '=', function (Builder $q) {
//                /** Builder $q */
//                $q->from($this->profile->base_table . ' as bt2')
//                    ->selectRaw('max(bt2.' . $this->profile->date_column . ')')
//                    ->whereColumn($this->profile->base_table . '.' . $this->profile->aggregate_column, '=', 'bt2.' . $this->profile->aggregate_column);
//            });
            //->groupBy($this->data_table.'.'.$this->aggregate_column);

        info('About to augment the query');
        info('Section id: ' . $this->id);
        $this->addJoinsToQuery($query)
            ->addWheresToQuery($query)
            ->excludeRows($query);

        $this->addQuery($query, 'compare');

        info('Compare query: ' . $query->toSql());
    }

    /**
     * @param Collection $first
     * @param Collection $second
     */
    public function compareAndRemoveOldest(Collection $first, Collection $second)
    {
        if ($dot_pos = strpos($this->profile->date_column, '.') > -1) {
            $date_field = substr($this->profile->date_column, $dot_pos + 1);
        } else {
            $date_field = $this->profile->date_column;
        }
        logger('Date field: ' . $date_field);

        $sameCollection = $first === $second;

        // Loop through first collection
        foreach ($first as $firstKey => $firstItem) {
            // Loop through second collection
            foreach ($second as $secondKey => $secondItem) {

                // If the records don't have the same id field, continue
                if ($firstItem->{$this->profile->aggregate_column} !== $secondItem->{$this->profile->aggregate_column}) {
                    continue;
                }

                if ($sameCollection && $firstItem === $secondItem) {
                    continue;
                }

                // If the items are equivalent or the row item is not as recent
                if ($firstItem === $secondItem
                    || Carbon::createFromFormat('Y-m-d H:i:s', $secondItem->{$date_field})->lte(Carbon::createFromFormat('Y-m-d H:i:s', $firstItem->{$date_field}))) {
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
        logger('Building calculated rows data');
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
                    //debug($cr);
                    $this->compareAndRemoveOldest($rowData, $cr['data']);
                }

                $this->addCalculatedRow($row->label, $rowData);
            }
        }
    }

    public function addCalculatedRow($label, $data)
    {
        $this->calculatedRowData->push(compact('label', 'data'));

        //debug($this->calculatedRowData);
    }

    public function addCalculatedRowsToData()
    {
        foreach ($this->calculatedRowData as $rowData) {
            $count = $rowData['data']->count();
            if ($this->includeZeroRows || $count > 0) {
                $this->data[$rowData['label']] = $count;
                $this->total += $count;
            }
        }
    }

    /**
     * This is the main entry point for building the
     * sections of the report.
     *
     * @param Profile|null $profile
     * @return $this
     */
    public function build(Profile $profile = null)
    {
        $this->init($profile);

        $this->getList();

        $this->built = true;

        return $this;
    }

    public function getList()
    {
        info('Section::getList()');
        if ($query = $this->getQuery('list')) {
            $this->list = $query
                ->pluck($this->list_label_column, $this->list_key_column);
        }
    }

    public function getTotalAttribute()
    {
        if (!$this->built) {
            $this->build()->fetchData();
        }

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

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function calculatedRows()
    {
        return $this->hasMany(CalculatedRow::class);
    }

    protected function aggregateColumn()
    {
        return $this->data_table.'.'.$this->aggregate_column;
    }
}
