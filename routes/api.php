<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return new \App\Http\Resources\Advocate($request->user());
//});

Route::group(['middleware' => 'auth:api'], function() {

    Route::get('/user', function (Request $request) {
        return new \App\Http\Resources\Advocate($request->user());
    });

    // Abusers
    Route::get('abusers/search', 'AbuserController@search');
    Route::resource('abusers', 'AbuserController');

    Route::resource('abuse-relationships', 'AbuseRelationshipController');

    Route::resource('activities', 'ActivityController');

    Route::resource('advocates', 'AdvocateController');

    Route::resource('client-outcomes', 'ClientOutcomeController');

    Route::get('clients/search', 'ClientController@search');
    Route::resource('clients', 'ClientController');

    Route::resource('dependents', 'DependentController');

    Route::resource('incidents', 'IncidentController');

    Route::resource('intakes', 'IntakeController');

    Route::get('/localities/{state_id}', function ($state_id) {

        $counties = \App\County::where('state_id', '=', $state_id)->orderBy('name')->get();
        $cities = \App\City::where('state_id', '=', $state_id)->orderBy('name')->get();

        return response()->json(compact('counties', 'cities'));
    });

    Route::resource('notes', 'NoteController');
    Route::resource('phones', 'PhoneController');

    Route::resource('outcomes', 'OutcomeController');

    Route::resource('reporting/profiles', 'ProfileController');
    Route::post('reporting/profiles/upload', 'ProfileController@upload');
    Route::post('reporting/profiles/import', 'ProfileController@import');
    Route::resource('reporting/reports', 'ReportController');

    Route::get('/search', 'SearchController@search');

    Route::get('reporting/builder/models', function() {
        return new \Illuminate\Http\JsonResponse(['data' => getModels()]);
    });
});

function getModels()
{
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

    return $models;
}

