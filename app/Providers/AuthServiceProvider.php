<?php

namespace App\Providers;

use App\Abuser;
use App\AbuseRelationship;
use App\Activity;
use App\Advocate;
use App\Client;
use App\ClientOutcome;
use App\Dependent;
use App\Incident;
use App\Intake;
use App\Note;
use App\Phone;
use App\Policies\AbuseRelationshipPolicy;
use App\Policies\AbuserPolicy;
use App\Policies\ActivityPolicy;
use App\Policies\AdvocatePolicy;
use App\Policies\ClientOutcomePolicy;
use App\Policies\ClientPolicy;
use App\Policies\DependentPolicy;
use App\Policies\IncidentPolicy;
use App\Policies\IntakePolicy;
use App\Policies\NotePolicy;
use App\Policies\PhonePolicy;
use App\Policies\ProfilePolicy;
use App\Policies\ReportPolicy;
use App\Reports\Profile;
use App\Reports\Report;
use Carbon\Carbon;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
        Abuser::class => AbuserPolicy::class,
        AbuseRelationship::class => AbuseRelationshipPolicy::class,
        Activity::class => ActivityPolicy::class,
        Advocate::class => AdvocatePolicy::class,
        Client::class => ClientPolicy::class,
        ClientOutcome::class => ClientOutcomePolicy::class,
        Dependent::class => DependentPolicy::class,
        Incident::class => IncidentPolicy::class,
        Intake::class => IntakePolicy::class,
        Note::class => NotePolicy::class,
        Phone::class => PhonePolicy::class,
        Profile::class => ProfilePolicy::class,
        Report::class => ReportPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::routes(function ($router) {
            $router->forAccessTokens();
            $router->forPersonalAccessTokens();
            $router->forTransientTokens();
        });

        Passport::tokensExpireIn(Carbon::now()->addMinutes(10));

        Passport::refreshTokensExpireIn(Carbon::now()->addDays(10));
    }
}
