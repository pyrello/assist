<?php

use Illuminate\Support\Facades\Route;

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

Route::get('reports/{id}/download', 'Api\ReportController@download');

//Route::get('test', function() {
//    /** @var \App\Client $client */
//    $client = \App\Client::find(1);
//
//    $client->first_name = 'Daisy';
//    dd($client->isDirty());
//
//    return '';
//});

Route::get('test/search', function(\Illuminate\Http\Request $request) {


    $q = $request->get('q');

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
    $search_query = \App\Test::query();
    $fragments = explode(' ', $q);

    foreach ($fragments as $fragment) {
        $search_query = $search_query->where(function($query) use ($fragment) {
            $query->where(DB::raw('LOWER(first_name)'), 'like', "$fragment%")
                ->orWhere(DB::raw('LOWER(last_name)'), 'like', "$fragment%");
        });
    }
    $search_query2 = clone $search_query;

    $start1 = microtime(true);

    $results1 = $search_query->get();

    $end1 = microtime(true);

    $execution_time1 = ($end1 - $start1)/60;

    (new \Illuminate\Support\Debug\Dumper())->dump([
        'title' => 'Ignoring anonymous',
        'time' => $execution_time1,
        'results' => $results1
    ]);

    unset($start1, $end1, $results1, $execution_time1);
    $fragments = explode(' ', strtolower($q));

    foreach ($fragments as $fragment) {
        $search_query = $search_query->where(function($query) use ($fragment) {
            $query->whereRaw("LOWER(first_name) LIKE '$fragment%'")
                ->orWhereRaw("LOWER(last_name) LIKE '$fragment%'");
        });
    }

    $search_query2 = $search_query2->where('anonymous', '=', false);

    $start2 = microtime(true);

    $results2 = $search_query2->get();

    $end2 = microtime(true);

    $execution_time2 = ($end2 - $start2)/60;

    (new \Illuminate\Support\Debug\Dumper())->dump([
        'title' => 'Excluding anonymous',
        'time' => $execution_time2,
        'results' => $results2
    ]);

    die();
});

// Vue router comes authentication
Route::get('/{vue_router?}', function () {

    // Authentication is required for the entire system
    if (Auth::check()) {
        return view('home');
    }

    return redirect('/login');
})->where('vue_router', '[\/\w\.-]*');
