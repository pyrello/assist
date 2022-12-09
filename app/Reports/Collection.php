<?php

namespace App\Reports;

use App\Reports\Counters\BasicCounter;
use App\Reports\Traits\Joinable;
use App\Reports\Traits\Whereable;
use App\Services\CsvCreator;
use App\Services\ZipCreator;
use Carbon\Carbon;
use Illuminate\Database\Query\Builder;

/**
 * Class Profile
 *
 * @package App\Reports
 * @property string $base_table
 * @property string $aggregate_column
 * @property string $date_column
 */
class Collection extends ModelWithQueries
{
    use Joinable, Whereable;

    public $builtSections = [];

    protected $queryInitialized = false;

    protected $built = false;

    protected $counter = null;

    public $fillable = [
        'label',
        'base_table',
        'aggregate_column',
        'date_column',
        'counter_class',
    ];

    protected $hidden = ['wheres', 'joins'];

    public $timestamps = false;

    public $table = 'report_profiles';

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function sections()
    {
        return $this->hasMany(Section::class, 'report_profile_id');
    }

    /**
     * @param $start_date
     * @param null $end_date
     * @return $this
     */
    public function build($start_date, $end_date = null)
    {
        logger('============================= Starting build ==================================');
        if (is_null($end_date)) {
            $end_date = Carbon::now();
        }

        info('Report::build()');
        if (!$this->hasQuery()) {
            $this->initQuery($start_date, $end_date);
        }

        if (!$this->relationLoaded('sections')) {
            $this->load('sections');
        }
        //var_dump($this->sections);

        /** @var Section $section */
        foreach ($this->sections as $section) {
            $section->build($this)->fetchData();
            $this->builtSections[] = array_merge($section->getAttributes(), ['data' => $section->data]);
        }

        $this->built = true;

        return $this;
    }

    public function getSectionDataAttribute()
    {
        if (!$this->built) {
            $this->build($this->report->start_date, $this->report->end_date);
        }

        return $this->builtSections;
    }

    public function initQuery($start_date, $end_date)
    {
        info('Report::initQuery()');
        $query = $this->newBaseQueryBuilder()
            ->from($this->base_table)
            // Add the start and end date from the profile
            ->whereDate($this->dateColumn(), '>', $start_date)
            ->whereDate($this->dateColumn(), '<=', $end_date)
//            ->where($this->dateColumn(), '=', function (Builder $q) {
//                /** Builder $q */
//                $q->from($this->base_table . ' as bt2')
//                    ->selectRaw('max(' . $this->prefixedColumn($this->date_column, 'bt2') . ')')
//                    ->whereColumn($this->aggregateColumn(), '=', $this->prefixedColumn($this->aggregate_column, 'bt2'));
//            })
            ->distinct();
            //->select($this->base_table.'.'.$this->aggregate_column);
            //->groupBy($this->base_table.'.'.$this->aggregate_column);

        $this->addJoinsToQuery($query);
        $this->addWheresToQuery($query);
        logger('Profile query: ' . $query->toSql());
        logger('Profile vars: ' . print_r($query->getBindings(), true));
        $this->addQuery($query);
    }

    public function download()
    {
        // Check how many sections there are
        // If there is only one section: create a CSV file and return it
        // If there is more than one section:
            // Create CSV files for each one
            // Create a ZIP archive containing all of them
            // Return the ZIP archive

        if (count($this->section_data) < 2) {
            $section = $this->section_data[0];
            // Section label overrides the general label
            $label = isset($section['label']) ? $section['label'] : $this->label;
            $download = new CsvCreator($label, $section['data']);
        } else {
            $files = [];
            foreach($this->section_data as $section) {
                // Section label overrides the general label
                $label = isset($section['label']) ? $section['label'] : $this->label;
                $csv = new CsvCreator($label, $section['data']);
                $files[] = $csv->getDownload();
            }
            $download = new ZipCreator($this->label, $files);
        }

        return $download->getDownload();
    }



    public function aggregateColumn()
    {
        return $this->prefixedColumn($this->aggregate_column);
    }

    public function dateColumn()
    {
        return $this->prefixedColumn($this->date_column);
    }

    public function prefixedColumn($column, $prefix = null)
    {
//        logger('function: prefixedColumn: prefix: ' . $prefix . ', column: ' . $column);
        // If the $prefix exists, use it, overwriting a
        // prefix if there was one.
        if ($prefix) {
            if (($pos = strpos($column, '.')) > -1) {
//                logger('Prefix exists and the column is already prefixed');
//                logger('Pos: ' . $pos);
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

//        logger('prefixed column: ' . $prefix . '.' . $column);

        return $prefix . '.' . $column;
    }

}
