<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientOutcomeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('client_outcome', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('advocate_id');
            $table->unsignedInteger('client_id');
            $table->unsignedInteger('incident_id');
            $table->unsignedInteger('outcome_id')->nullable();
            $table->text('custom_description')->nullable();
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
        Schema::dropIfExists('client_outcome');
    }
}
