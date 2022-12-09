<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReportingCalculatedRowsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reporting_calculated_rows', function (Blueprint $table) {
            $table->increments('id');
            $table->string('label');
            $table->unsignedInteger('reporting_profile_id')->nullable();
            $table->string('data_table');
            $table->string('data_column');
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
        Schema::dropIfExists('reporting_calculated_rows');
    }
}
