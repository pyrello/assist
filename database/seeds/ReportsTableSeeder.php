<?php

use App\Reports\CalculatedRow;
use App\Reports\Profile;
use App\Reports\Where;
use App\Reports\Traits\Whereable;
use App\Reports\Join;
use App\Reports\Traits\Joinable;
use App\Reports\LabelList;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Collection;

class ReportsTableSeeder extends Seeder
{
    protected $joinMap = [];
    protected $whereMap = [];
    protected $listMap = [];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $db_tables = [
            'reporting_profiles',
            'reporting_reports',
            'reporting_joins',
            'reporting_wheres',
            'reporting_lists',
            'reporting_calculated_rows',
            'reporting_joinables',
            'reporting_whereables',
        ];

        foreach($db_tables as $table) {
            DB::table($table)->truncate();
        }
//        try {
            $this->importLists();

            $files = File::allFiles(resource_path('data/reporting/reports'));

            foreach ($files as $file) {
                $json = file_get_contents($file->getPathName());

                $structure = json_decode($json, true);
                dump($structure['label']);

                $report = [
                    'label' => $structure['label'],
                    'base_table' => $structure['base_table'],
                    'aggregate_column' => $structure['aggregate_column'],
                    'start_column' => $structure['start_column'],
                ];

                if (isset($structure['join_to_column'])) {
                    $report['join_to_column'] = $structure['join_to_column'];
                }

                if (isset($structure['join_to_column'])) {
                    $report['join_key_column'] = $structure['join_key_column'];
                }

                if (isset($structure['end_column'])) {
                    $report['end_column'] = $structure['end_column'];
                }

                if (isset($structure['aggregation_type'])) {
                    $report['aggregation_type'] = $structure['aggregation_type'];
                }

                // Todo: Add validation to these to make sure the aggregation_type = 'percent'
                if (isset($structure['percent_column'])) {
                    $report['percent_column'] = $structure['percent_column'];
                }

                if (isset($structure['percent_value'])) {
                    $report['percent_value'] = $structure['percent_value'];
                }


                /** @var Profile $report */
                $report = Profile::create($report);

                dump($report->label);

                if (isset($structure['list'])) {
                    $list_id = $this->listMap[$structure['list']]->id;
                    $report->labelList()->associate($list_id);
                    $report->save();
                }

                if (isset($structure['joins'])) {
                    $join_ids = [];
                    foreach ($structure['joins'] as $k => $join) {
                        $join = $join + [
                            'to_column' => isset($join['to_column']) ? $join['to_column'] : $report->join_to_column,
                            'from_table' => $report['base_table'],
                            'from_column' => isset($report->join_key_column) ? $report->join_key_column : $report->aggregate_column,
                        ];
                        $join['label'] = $join['from_table'] . ' JOIN ' . $join['to_table'];
                        $join = Join::create($join);

                        $join_ids[] = $join->id;
                    }

                    $report->attachJoins($join_ids);
                }

                if (isset($structure['wheres'])) {
                    $where_ids = [];
                    foreach($structure['wheres'] as $where) {
                        $where = Where::create($where);
                        $where_ids[] = $where->id;
                    }
                    $report->wheres()->attach($where_ids);
                }

//                dump('About to add calculated rows');
                if (isset($structure['calculated_rows'])) {
                    $this->importCalculatedRows($report, $structure['calculated_rows']);
                }
            }
//        } catch (Exception $e) {
//            print $e->getMessage();
//        }
    }

    public function importLists()
    {
        $path = resource_path('data/reporting/lists');

        if (File::isDirectory($path)) {
            $files = File::allFiles($path);

            foreach ($files as $file) {
                $json = file_get_contents($file->getPathName());

                $structure = json_decode($json, true);

                $list = LabelList::create($structure);

                $this->listMap[$structure['label']] = $list;
            }
        }
    }

    public function importJoins()
    {
        $path = resource_path('data/reporting/joins');
        if (File::isDirectory($path)) {
            $files = File::allFiles($path);

            foreach ($files as $file) {

                $json = file_get_contents($file->getPathName());

                $structure = json_decode($json, true);

                $join = Join::create($structure);

                $this->joinMap[$structure['label']] = $join;
            }
        }
    }

    public function attachJoins(Joinable $joinable, array $joins = [])
    {
        $attach_ids = [];
        foreach ($joins as $label) {
            $attach_ids[] = $this->joinMap[$label]->id;
        }

        $joinable->attachJoins($attach_ids);
    }

    public function importWheres()
    {
        $path = resource_path('data/reporting/wheres');
        if (File::isDirectory($path)) {
            $files = File::allFiles($path);

            foreach ($files as $file) {

                $json = file_get_contents($file->getPathName());

                $structure = json_decode($json, true);

                $where = Where::create($structure);

                $this->whereMap[$structure['label']] = $where;
            }
        }
    }

    /**
     * @param Whereable $whereable
     * @param array $wheres
     */
    public function attachWheres($whereable, array $wheres = [])
    {
        $attach_ids = [];
        foreach ($wheres as $label) {
            $attach_ids[] = $this->whereMap[$label]->id;
        }

        $whereable->attachWheres($attach_ids);
    }

    /**
     * @param Profile $report
     * @param array $rows
     */
    public function importCalculatedRows(Profile $report, array $rows = [])
    {
        foreach ($rows as $schema) {

            $wheres = isset($schema['wheres']) ? $schema['wheres'] : null;

            unset($schema['wheres']);

            /** @var CalculatedRow $row */
            $row = CalculatedRow::create($schema);

            if (!is_null($wheres)) {
                $where_ids = [];
                foreach ($wheres as $where) {
                    $where = Where::create($where);
                    $where_ids[] = $where->id;
                }
                $row->attachWheres($where_ids);
            }

            $report->calculatedRows()->save($row);
            $report->save();
        }
    }
}
