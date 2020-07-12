<?php

use Illuminate\Http\Request;

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
    Route::resource('reporting/reports', 'ReportController');

    Route::get('/search', 'SearchController@search');
});

