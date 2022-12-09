<?php

namespace App\Providers;

use App\Abuser;
use App\Activity;
use App\Advocate;
use App\Client;
use App\ClientOutcome;
use App\Dependent;
use App\Incident;
use App\Services\ReportBuilder;
use Illuminate\Support\ServiceProvider;

class ReportingServiceProvider extends ServiceProvider
{
    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
//    protected $defer = true;
    protected $reportModels = [
        Abuser::class,
        Activity::class,
        Advocate::class,
        Client::class,
        ClientOutcome::class,
        Dependent::class,
        Incident::class,
    ];
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot(ReportBuilder $reporter)
    {
        /** @var ReportBuilder $reporter */
        $reporter->loadModels($this->reportModels);
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(ReportBuilder::class, function ($app) {
            return new ReportBuilder(config('reporting.models'));
        });
    }

    public function provides()
    {
        return [ReportBuilder::class];
    }
}
