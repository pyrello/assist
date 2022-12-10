<?php

namespace App\Http\Controllers\Api;

use App\Activity;
use App\Reports\Profile;
use App\Client;
use App\Counters\AgeCounter;
use App\Counters\BasicCounter;
use App\Ethnicity;
use App\Gender;
use App\Reports\Report;
use App\Service;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReportController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reports = Report::with('profile')->get();

        return $this->success($reports, 'Successfully retrieved reports');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        info('Data: ' . print_r($data, true));
        $report = new Report($data);
        $report->save();

        return $this->success($report, 'Successfully created report');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        /** @var Report $report */
        $report = Report::find($id);
        $report->build();

        return new JsonResource($report);
    }

    public function test(Request $request) {

    }

    public function download($id)
    {
        /** @var Report $report */
        $report = Report::find($id);

        $report->build();

        return response()->download($report->download());
    }

    public function age(Request $request)
    {
        $options = $request->all();
        $counts = ['Total' => 0];
        /**
         * $options['ranges'] = [
         *      0 => 17,
         *      18 => 30,
         *      31 => 45,
         *      46 => 60,
         *      61 => '+'
         * ]
         */
        $ranges = isset($options['ranges']) ? $options['ranges'] : [
            0 => 17,
            18 => 30,
            31 => 45,
            46 => 60,
            61 => '+',
        ];

        $raw_data = Client::pluck('birth_date');
        $today = Carbon::now();

        foreach ($raw_data as $date) {
            $date = new Carbon($date);
            $age = $date->diff($today)->y;

            $counts[$age] = isset($counts[$age]) ? $counts[$age]+1 : 1;
            $counts['Total']++;
        }

        if (!is_null($ranges)) {
            $total = $counts['Total'];
            unset($counts['Total']);
            $age_count = $counts;
            $counts = [];

            foreach ($age_count as $age => $count) {
                foreach ($ranges as $min => $max) {
                    $range = null;
                    if ($age >= $min) {

                        if (is_numeric($max)) {
                            if ($age <= $max) {
                                $range = $min . ' - ' . $max;
                            }
                        } else {
                            $range = $min . $max;
                        }
                    }
                    if (!is_null($range)) {
                        $counts[$range] = isset($counts[$range]) ? $counts[$range]+$count : $count;
                    }
                }
            }

            $counts['Total'] = $total;
        }

        // Sort the counts alphabetically by key
        $total = $counts['Total'];
        unset($counts['Total']);
        ksort($counts);
        $counts['Total'] = $total;

        //return response()->json(compact('counts'));
        return $this->success($counts);
    }

    public function gender()
    {
        $genders = Gender::pluck('name');

        $raw_counts = Client::select(\DB::raw('count(*) as count, gender'))
            ->groupBy('gender')
            ->pluck('count', 'gender')
            ->toArray();

        $counter = new BasicCounter($raw_counts, $genders);

        $counts = $counter->getCounts();

        return $counts;
    }

    public function serviceHours()
    {
        $services = Service::pluck('name');
        dump($services);

        $raw_counts = Activity::select(\DB::raw('TIMESTAMPDIFF(HOUR, started_at, ended_at) as hours, requested_service_id'))
            ->get()
            ->toArray();

        dump($raw_counts);

        $raw_counts = Activity::select(\DB::raw('SUM(TIMESTAMPDIFF(HOUR, started_at, ended_at)) as count, requested_service_id'))
            ->groupBy('requested_service_id')
            ->pluck('count', 'requested_service_id')
            ->toArray();

        dd($raw_counts);
    }

    public function ethnicity(Request $request)
    {
        $options = $request->all();
        $strategy = isset($options['multiple_strategy']) ? $options['multiple_strategy'] : 'collapse_other';
        $other = isset($options['other']) ? $options['other'] : 'Multi-racial';
        $collapse = [];
        $counts = [];
        $counted = [];

        $raw_ethnicity = Ethnicity::pluck('name');

        // Initialize count array with base labels
        foreach($raw_ethnicity as $name) {
            $counts[$name] = 0;
        }

        $counts['Total'] = 0;

        // Get the sets of id and ethnicity
        $raw_data = \DB::table('clients')
            ->join('client_ethnicity as ce', 'ce.client_id', '=', 'id')
            ->join('ethnicity as e', 'e.id', '=', 'ce.ethnicity_id')
            ->select(['clients.id', 'e.name', 'ce.order'])
            ->orderBy('clients.id')
            ->orderBy('ce.order')
            ->get();

        //dd($raw_data);

        // Loop through raw data
        foreach ($raw_data as $item) {

            $ethnicity = $item->name;

            if (isset($counted[$item->id])) { // If we have already counted this client

                // Get the previous ethnicity that was counted
                $previous = $counted[$item->id];

                // We may be allowing multiple strategies for merging multiple selections
                switch ($strategy) {
                    case 'combine_multiple':

                        // If the current item exists as part of the string
                        // of the last one, there was a storage error and
                        // we are storing a duplicate record somehow. For
                        // now, we'll just skip it.
                        if (strpos($previous, $item->name) !== false) {
                            // Todo: queue email for developer about the duplicate record
                            continue;
                        }

                        // Create a new ethnicity string with the previous and new values
                        // sorted alphabetically and delimited by a slash.
                        $ethnicity = array_merge(explode('/', $previous), [$item->name]);
                        sort($ethnicity);
                        $ethnicity = implode('/', $ethnicity);

                        break;
                    case 'collapse_primary':
                        continue;
                        break;
                    case 'collapse_other':
                    default:
                        // We have already counted this client and don't need to do anything else
                        if ($previous === $other) {
                            continue;
                        }

                        $ethnicity = $other;

                        break;
                }

                // Undo the previous incrementing
                $counts[$previous]--;
                $counts['Total']--;

            }

            // Add this to counted so we can continue to check for dupes
            $counted[$item->id] = $ethnicity;

            // Add this to the counts
            $counts[$ethnicity] = (isset($counts[$ethnicity])) ? $counts[$ethnicity]+1 : 1;
            $counts['Total']++;
        }

        // Delete data objects no longer in use
        unset($ethnicity);
        unset($previous);
        unset($raw_data);
        unset($counted);

        // Sort the counts alphabetically by key
        $total = $counts['Total'];
        unset($counts['Total']);
        ksort($counts);
        $counts['Total'] = $total;

        return $this->success($counts);
    }

    public function preview(Request $request)
    {
        $results = [];
        $query = $request->all();
        info('query: ' . print_r($query, true));

        $reportQuery = Client::query();

        if (isset($query['activities'])) {
            if (isset($query['activities']['start'])) {
                $reportQuery = $reportQuery->whereHas('activities', function($q) use ($query) {
                    $q->where('date', '>=', Carbon::parse($query['activities']['start'])->startOfDay());
                });
            }
            if (isset($query['activities']['end'])) {
                $reportQuery = $reportQuery->whereHas('activities', function($q) use ($query) {
                    $q->where('date', '<=', Carbon::parse($query['activities']['end'])->endOfDay());
                });
            }
        }

        $raw = $reportQuery->get();

        if (isset($query['age'])) {
            $age = new AgeCounter($raw, $query['age']['ranges']);
            $results['age'] = $age->getCounts();
        }

        return $this->success($results);
    }

    protected function _buildReport($demographics, $query)
    {
        $results = [];
        //$query = $request->all();
        info('query: ' . print_r($query, true));

        $reportQuery = Client::query();

        if (isset($query['activities'])) {
            if (isset($query['activities']['start'])) {
                $reportQuery = $reportQuery->whereHas('activities', function($q) use ($query) {
                    $q->where('date', '>=', Carbon::parse($query['activities']['start'])->startOfDay());
                });
            }
            if (isset($query['activities']['end'])) {
                $reportQuery = $reportQuery->whereHas('activities', function($q) use ($query) {
                    $q->where('date', '<=', Carbon::parse($query['activities']['end'])->endOfDay());
                });
            }
        }

        $raw = $reportQuery->get();

        if (isset($query['age'])) {
            $age = new AgeCounter($raw, $query['age']['ranges']);
            $results['age'] = $age->getCounts();
        }

        return $results;
    }

    public function activity()
    {
        $activity = Activity::all();

        dd($activity->toArray());
    }

    /**
     * Remove the specified Report from storage.
     * DELETE /reporting/reports/{id}
     *
     * @param Report $report
     * @return JsonResponse
     * @throws \Exception
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy(Report $report)
    {
        $id = $report->id;

        $this->authorize('delete', $report);

        $report->delete();

        return new JsonResponse(compact('id'));
    }
}


