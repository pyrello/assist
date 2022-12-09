<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token?}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');
Route::get('reports/intake-date/download', function(\Illuminate\Http\Request $request) {
    $date = $request->get('intake_date');

    /** @var \Illuminate\Database\Query\Builder $search_query */
    $search_query = \App\Client::with('phones');
//    $search_query = DB::table('clients')
//        ->join('intakes', 'intakes.id', '=', 'clients.intake_id')
//        ->whereDate('intakes.date', '=', $date);
//        ->get(['clients.id', 'first_name', 'last_name']);

    $search_query->whereHas('intake', function ($query) use ($date) {
        $query->whereDate('date', '=', $date);
    });

    $results = $search_query->getQuery()->get(['clients.id', 'first_name', 'last_name']);

    $results = $results->map(function ($item) {
        return (array) $item;
    });
    logger('results: ' . print_r($results, true));

    $download = new \App\Services\CsvCreator('intakes-' . $date, ['headers' => ['ID', 'First Name', 'Last Name']] + $results->toArray());

    return response()->download($download->getDownload());
});

Route::get('reports/{id}/download', 'Api\ProfileController@download');

//Route::get('test', function() {
//    /** @var \App\Client $client */
//    $client = \App\Client::find(1);
//
//    $client->first_name = 'Daisy';
//    dd($client->isDirty());
//
//    return '';
//});

Route::get('test/reporting', function(\Illuminate\Http\Request $request) {
    $reporter = resolve('App\Services\ReportBuilder', config('reporting.models'));
    $reporter->loadModels(config('reporting.models'));
    $models = collect();
    $tables = [];
    $paths = [];
//    $tables = array_map('reset', \DB::select('SHOW TABLES'));
    foreach ($reporter->getModels() as $class) {
        /** @var \Illuminate\Database\Eloquent\Model $instance */
        $instance = new $class();
        $table = $instance->getTable();
        $columns = array_map('reset', DB::select('SHOW COLUMNS FROM ' . $table));
        $relatives = collect();
        $models->push(compact('class', 'instance', 'columns', 'relatives'));
        $tables[$instance->getTable()] = [
            'columns' => $columns,
        ];
    }

    foreach($models as $info) {
        $instance = $info['instance'];
        $base_name = class_basename($info['class']);
        $fk = $instance->getForeignKey();
//        $test = camel_case(class_basename($info['class']));
//        $test_plural = camel_case(class_basename($info['class']));
        foreach ($models as $info2) {
            $instance2 = $info2['instance'];
            $base_name2 = class_basename($info2['class']);
            $fk2 = $instance2->getForeignKey();
            if ($fk !== $fk2) {
//                dump("=== Comparing $base_name and $base_name2 ===");
                if (in_array($fk2, $info['columns'])) {
//                    $info['relatives']->push(new \App\Reports\Relationship($instance2->getTable(), $fk));
                    $test = camel_case($base_name2);
                    $test_plural = camel_case(str_plural($base_name2));
                    foreach([$test, $test_plural] as $t) {
                        if (method_exists($instance, $t)) {
//                            dump("=> $base_name2 is a relative of $base_name", $t);
                            $info['relatives']->push(new \App\Reports\Relationship($t));
                        }
                    }
                    $test = camel_case($base_name);
                    $test_plural = camel_case(str_plural($base_name));
                    foreach([$test, $test_plural] as $t) {
                        if (method_exists($instance2, $t)) {
//                            dump("=> $base_name is a relative of $base_name2", $t);
                            $info2['relatives']->push(new \App\Reports\Relationship($t));
                        }
                    }
                }
//                if (in_array($fk, $info2['columns'])) {
//                }
            }
        }
    }

//    $table_names = array_keys($tables);
//
//    foreach ($tables as $table_name => $info) {
//        $relatives = collect();
//        foreach ($info['columns'] as $column) {
//            $pos = strpos($column, '_id');
//            if ($pos) {
//                $test = substr($column, 0, $pos);
//                $test_plural = str_plural($test);
//                if (in_array($test, $table_names)) {
//                    $relatives->push(new \App\Reports\Relationship($test, $column));
//                }
//                elseif (in_array($test_plural, $table_names)) {
//                    $relatives->push(new \App\Reports\Relationship($test_plural, $column));
//                }
//            }
//        }
//        $tables[$table_name]['relatives'] = $relatives;
//    }
//    findReverseRelatives($tables);
//    findDeepRelatives($tables);
//    dump($reporter);

//    dd($models);

    return view('reports', compact('models'));
});

function findReverseRelatives(&$tables)
{
    $temp = $tables;
    foreach ($temp as $table_name => $info) {
        foreach ($temp as $table_name2 => $info2) {
            if ($table_name !== $table_name2) {
                dump("== Looking at $table_name and $table_name2 ==");
                if (($item = $info2['relatives']->where('last', $table_name)->first()) && !($item2 = $info['relatives']->where('last', $table_name2)->first())) {
                    dump("$table_name2 has $table_name as a relative", $item);
                    $info['relatives']->push(new \App\Reports\Relationship($table_name2, $table_name2 . '.' . $item->items[0]['column']));
                }
            }
        }
    }
}

/**
 * Todo: Refactor this function to recurse along each table branch before moving on to the next.
 * @param $tables
 * @return int
 */
function findDeepRelatives(&$tables)
{
    $temp = $tables;
    $changes = 0;
    // Loop through tables
    foreach ($temp as $table_name => $info) {
        dump("====== table_name: $table_name ======", $info);
        // Loop through tables again
        foreach($temp as $tname => $i) {

            // Only proceed if we are not comparing the same table
            if ($table_name !== $tname) {

                dump("==== tname: $tname ====", $i);

                // 1. Check if the table in the second loop ($tname) is a relative of the table in the first loop ($table_name)
                if ($item = $info['relatives']->where('last', $tname)->first()) {
                    dump("$tname is a relative of $table_name", $item);

                    // 2. If it is, loop through the it's ($tname) relatives
                    /** @var \App\Reports\Relationship $r */
                    foreach($temp[$tname]['relatives'] as $r) {

                        // 3. If any of the relatives are not already a relative of the table in the first loop ($table_name) and don't end with the same table that is already in the relatives, then add a relationship that consists of $tname and the relative of $tname
                        if (!$info['relatives']->where('last', $r->last)->first()) {
                            dump('Adding secondary relative', $r);
                            /** @var \App\Reports\Relationship $rel */
                            $rel = clone $r;
                            $rel->unshift($tname);
                            $tables[$table_name]['relatives']->push($rel);
                            $changes++;
                        }
                    }
                }

                // 1. Loop through relatives of $table_name
                // 2. If any relatives end with $tname, add all their relatives that don't have the same last as another

                /** @var \App\Reports\Relationship $relative */
                foreach ($info['relatives'] as $relative) {
                    dump("===== relative: =====", $relative->fullPath());
                    if ($relative->last === $tname) {
                        dump('match: ' . $relative->fullPath());
                        /** @var \App\Reports\Relationship $r */
                        foreach ($temp[$tname]['relatives'] as $r) {
                            if ($relative->last !== $r->last) {
                                $rel = clone $r;
                                $rel->unshift($tname);
                                $tables[$table_name]['relatives']->push($rel);
//                                $changes++;
                            }
                        }
                    }
                }
            }
        }
    }
    logger('Changes: ' . $changes);
    if ($changes > 0) {
        do {
            dump('&*&*&*&* Starting a new level *&*&*&*&');
            $sub_changes = findDeepRelatives($tables);
        }
        while ($sub_changes > 0);
    }

    return $changes;
}

// Vue router comes authentication
Route::get('/{vue_router?}', function () {

    // Authentication is required for the entire system
    if (Auth::check()) {
        return view('home');
    }

    return redirect('/login');
})->where('vue_router', '[\/\w\.-]*');
