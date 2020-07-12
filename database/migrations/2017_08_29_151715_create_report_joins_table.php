<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReportJoinsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('report_joins', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_table');
            $table->string('first');
            $table->string('operator')->nullable();
            $table->string('second')->nullable();
            $table->string('type')->default('inner');
            $table->boolean('unique')->default(false);
            $table->unsignedInteger('joinable_id');
            $table->string('joinable_type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('report_joins');
    }
}
