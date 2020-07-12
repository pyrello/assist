<?php

namespace App\Http\Controllers\Api;

use App\Activity;
use App\Client;
use App\Incident;
use App\Note;
use App\Phone;
use App\Http\Resources\Client as ClientResource;
use Illuminate\Http\Request;

class SearchController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $q = $request->get('q');
        $params = $request->except('q');

        // Search by Name
        // Search by Phone number
        // Search by ID
        // Search by intake date
        // Search by activity date

        /**
         * Here's the idea:
         *
         * If the user is entering alpha characters, then they
         * are probably doing a name search. If the user is
         * entering number characters, then they are doing one
         * of the following types of searches:
         *  * ID
         *  * Phone Number
         *  * Intake Date
         *  * Activity Date
         *
         * Either here, or in the javascript, there should be
         * the logic to determine whether it is an alpha or
         * numeric search and to react accordingly. If it is
         * a numeric search, then we may need to look for
         * additional symbols (e.g. "/" or "-") to see if it
         * is a date.
         */

        /** @var \Illuminate\Database\Eloquent\Builder $search_query */
        $search_query = Client::with('phoneNumbers');

        // If $q is numeric
        if (is_numeric($q)) {
            // $q is numeric so this is either an id, a phone number, or a date

            // Phone number contains $q
            $search_query = $search_query->whereHas('phoneNumbers', function ($query) use ($q) {
                $query->where('number', 'like', "%$q%");
            });

            // Id starts with $q
            $search_query = $search_query->orWhere('id', 'like', "$q%");
        } else if (is_string($q)) {

            $search_query = $search_query->where('first_name', 'like', "$q%")
                ->orWhere('last_name', 'like', "$q%");
        }

        if (!empty($params)) {
            if (isset($params['intake_date'])) {
                $search_query->whereHas('intake', function ($query) use ($params) {
                    $query->where('intake_date', '=', $params['intake_date']);
                });
            }
            if (isset($params['last_activity_date'])){
                $search_query->whereHas('activities', function ($query) use ($params) {
                    $query->where('started_at', '<=', $params['last_activity_date'])
                        ->where('ended_at', '>=', $params['last_activity_date']);

                });
            }
        }

        logger('query', ['sql' => $search_query->toSql(), '?' => $q]);

        $results = $search_query->paginate(20);
//        logger('results', compact('results'));

        return ClientResource::collection($results);

//        return $this->success($results, "Search results for '$q'");
    }
}
