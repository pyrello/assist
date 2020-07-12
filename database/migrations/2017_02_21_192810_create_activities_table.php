<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('advocate_id');
            $table->unsignedInteger('client_id');
            $table->unsignedInteger('incident_id');
            $table->unsignedInteger('requested_service_id');
            $table->boolean('service_provided')->default(true);
            $table->string('why_not_provided')->nullable();
            $table->dateTime('started_at')->nullable();
            $table->dateTime('ended_at')->nullable();
            $table->decimal('duration')->nullable();
            $table->unsignedInteger('funding_source_id')->nullable();
            $table->string('state')->nullable();
            $table->string('city')->nullable();
            $table->unsignedInteger('client_age')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activities');
    }
}
