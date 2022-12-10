<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateReportSectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('report_sections', function (Blueprint $table) {
            $table->json('selects')->nullable();
            $table->string('counter_class')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('report_sections', function (Blueprint $table) {
            $table->dropColumn('selects');
            $table->dropColumn('counter_class');
        });
    }
}
