<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateReportingProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('reporting_profiles', function (Blueprint $table) {
            $table->text('raw_sql')->nullable();
            $table->string('base_table')->nullable()->change();
            $table->string('aggregate_column')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('reporting_profiles', function (Blueprint $table) {
            $table->dropColumn('raw_sql');
            $table->string('base_table')->nullable(false)->change();
            $table->string('aggregate_column')->nullable(false)->change();
        });
    }
}
