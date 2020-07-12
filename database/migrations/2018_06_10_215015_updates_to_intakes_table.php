<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdatesToIntakesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('intakes', function (Blueprint $table) {
            $table->unsignedInteger('referred_by_id')->nullable();
            $table->dropColumn('draft');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('intakes', function (Blueprint $table) {
            $table->dropColumn('referred_by_id');
            $table->boolean('draft')->default(true);
        });
    }
}
