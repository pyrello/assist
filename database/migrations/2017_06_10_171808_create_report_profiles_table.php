<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReportProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('report_profiles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('label')->nullable();
            $table->string('base_table');
            $table->string('aggregate_column');
            $table->string('date_column');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('report_profiles');
    }
}
