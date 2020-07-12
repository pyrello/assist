<?php

namespace App\Reports;

use App\Reports\Traits\Joinable;
use App\Reports\Traits\Whereable;
use App\Services\CsvCreator;
use App\Services\ZipCreator;
use Carbon\Carbon;
use Illuminate\Database\Query\Builder;

class Profile extends ModelWithQueries
{
    use Joinable, Whereable;

    public $builtSections = [];

    protected $queryInitialized = false;

    protected $built = false;

    public $fillable = [
        'label',
        'base_table',
        'aggregate_column',
        'date_column',
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
            ->where($this->dateColumn(), '=', function (Builder $q) {
                /** Builder $q */
                $q->from($this->base_table . ' as bt2')
                    ->selectRaw('max(bt2.' . $this->date_column . ')')
                    ->whereColumn($this->aggregateColumn(), '=', 'bt2.' . $this->aggregate_column);
            })
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
        return $this->base_table . '.' . $this->aggregate_column;
    }

    public function dateColumn()
    {
        return $this->base_table . '.' . $this->date_column;
    }

}
