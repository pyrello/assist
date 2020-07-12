<?php

namespace App\Providers;

use App\Abuser;
use App\AbuseRelationship;
use App\Client;
use App\Incident;
use App\Observers\AbuseRelationshipObserver;
use App\Observers\AbuserObserver;
use App\Observers\ClientObserver;
use App\Observers\IncidentObserver;
use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'App\Events\Event' => [
            'App\Listeners\EventListener',
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        AbuseRelationship::observe(AbuseRelationshipObserver::class);
        Abuser::observe(AbuserObserver::class);
        Client::observe(ClientObserver::class);
        Incident::observe(IncidentObserver::class);
    }
}
