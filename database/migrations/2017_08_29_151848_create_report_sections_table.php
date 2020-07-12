<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReportSectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('report_sections', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('report_profile_id')->nullable();
            $table->string('label')->nullable();
            $table->string('list_table')->nullable();
            $table->string('list_key_column')->nullable();
            $table->string('list_label_column')->nullable();
            $table->string('data_table');
            $table->string('data_key_column');
            $table->string('data_label_column');
            $table->string('aggregate_column');
            $table->string('order_by')->nullable();
            $table->text('excluded_rows')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('report_sections');
    }
}
