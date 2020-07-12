<?php

use App\Reports\Profile;
use Illuminate\Database\Seeder;

class ReportsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        logger('hello');
        try {
            $files = File::allFiles(resource_path('data/reports'));
            logger('Files: ' . print_r($files, true));

            foreach ($files as $file) {
                $json = file_get_contents($file->getPathName());

                $report_structure = json_decode($json, true);
                logger('Report structure: ' . print_r($report_structure, true));

                $report = new Profile([
                    'label' => $report_structure['label'],
                    'base_table' => $report_structure['base_table'],
                    'aggregate_column' => $report_structure['aggregate_column'],
                    'date_column' => $report_structure['date_column'],
                ]);

                $report->save();

                if (isset($report_structure['joins'])) {
                    $report->createAndAttachJoins($report_structure['joins']);
                }

                if (isset($report_structure['wheres'])) {
                    $report->createAndAttachWheres($report_structure['wheres']);
                }

                foreach ($report_structure['sections'] as $section_structure) {

                    $calculated_rows = isset($section_structure['calculated_rows']) ? $section_structure['calculated_rows'] : null;
                    unset($section_structure['calculated_rows']);

                    $wheres = isset($section_structure['wheres']) ? $section_structure['wheres'] : null;
                    unset($section_structure['wheres']);

                    $joins = isset($section_structure['joins']) ? $section_structure['joins'] : null;
                    unset($section_structure['joins']);

                    $section = new \App\Reports\Section($section_structure);

                    $section->save();

                    if (!is_null($wheres)) {
                        $section->createAndAttachWheres($wheres);
                    }

                    if (!is_null($joins)) {
                        $section->createAndAttachJoins($joins);
                    }

                    if (!is_null($calculated_rows)) {
                        $section->createAndAttachCalculatedRows($calculated_rows);
                    }

                    $report->sections()->save($section);
                }
            }
        } catch (Exception $e) {
            print $e->getMessage();
        }
    }
}
