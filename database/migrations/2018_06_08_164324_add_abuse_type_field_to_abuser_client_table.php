<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAbuseTypeFieldToAbuserClientTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('abuser_client', function (Blueprint $table) {
            $table->json('abuse_types')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('abuser_client', function (Blueprint $table) {
            $table->dropColumn('abuse_types');
        });
    }
}
