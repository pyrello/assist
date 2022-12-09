<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReportingProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reporting_profiles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('label');
            $table->string('base_table');
            $table->string('aggregate_column');
            $table->string('start_column');
            $table->string('join_to_column')->nullable();
            $table->string('join_key_column')->nullable();
            $table->string('end_column')->nullable();
            $table->string('percent_column')->nullable();
            $table->string('percent_value')->nullable();
            $table->string('aggregation_type')->default('count');
            $table->string('aggregate_null_label')->default('unknown');
            $table->string('label_list_id')->nullable();
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
        Schema::dropIfExists('reporting_profiles');
    }
}
