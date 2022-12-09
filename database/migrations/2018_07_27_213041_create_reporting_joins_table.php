<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReportingJoinsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reporting_joins', function (Blueprint $table) {
            $table->increments('id');
            $table->string('label');
            $table->string('operator')->nullable();
            $table->string('type')->default('inner');
            $table->boolean('unique')->default(false);
            $table->string('from_table')->nullable();
            $table->string('from_column');
            $table->string('to_table');
            $table->string('to_column');
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
        Schema::dropIfExists('reporting_joins');
    }
}
