<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddOutcomeStatusToClientOutcomeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('client_outcome', function (Blueprint $table) {
            $table->dropColumn('custom_description');
            $table->boolean('completed')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('client_outcome', function (Blueprint $table) {
            $table->text('custom_description')->nullable();
            $table->dropColumn('completed');
        });
    }
}
