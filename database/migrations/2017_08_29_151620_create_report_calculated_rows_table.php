<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReportCalculatedRowsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('report_calculated_rows', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('section_id')->nullable();
            $table->string('label')->nullable();
            $table->string('data_table');
            $table->string('data_column');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('report_calculated_rows');
    }
}
