<?php

namespace App\Reports;

use App\Services\CsvCreator;
use App\Services\ZipCreator;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    protected $built = false;

    public $fillable = [
        'report_profile_id',
        'start_date',
        'end_date',
    ];

    protected $casts = [
        'filters' => 'array',
    ];

    public function profile()
    {
        return $this->belongsTo(Profile::class, 'report_profile_id');
    }

    public function build()
    {
        $this->profile->build($this->start_date, $this->end_date);

        $this->built = true;

        return $this;
    }

    public function download()
    {
        // Check how many sections there are
        // If there is only one section: create a CSV file and return it
        // If there is more than one section:
            // Create CSV files for each one
            // Create a ZIP archive containing all of them
            // Return the ZIP archive

        $report = $this->profile->report_data;
        // Section label overrides the general label
//        $label = isset($section['label']) ? $section['label'] : $this->label;
        $download = new CsvCreator($this->profile->label, $report['data']);

//        if (count($this->profile->section_data) < 2) {
//        } else {
//            $files = [];
//            foreach($this->profile->section_data as $section) {
//                // Section label overrides the general label
//                $label = isset($section['label']) ? $section['label'] : $this->label;
//                $csv = new CsvCreator($label, $section['data']);
//                $files[] = $csv->getDownload();
//            }
//            $download = new ZipCreator($this->profile->label, $files);
//        }

        return $download->getDownload();
    }

}
