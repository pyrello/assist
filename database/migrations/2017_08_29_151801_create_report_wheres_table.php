<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReportWheresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('report_wheres', function (Blueprint $table) {
            $table->increments('id');
            $table->string('column_table')->nullable();
            $table->string('column');
            $table->string('operator');
            $table->string('arguments');
            $table->unsignedInteger('whereable_id');
            $table->string('whereable_type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('report_wheres');
    }
}
