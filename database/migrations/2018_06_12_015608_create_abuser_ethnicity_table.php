<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAbuserEthnicityTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('abuser_ethnicity', function (Blueprint $table) {
            $table->integer('abuser_id')->unsigned();
            $table->integer('ethnicity_id')->unsigned();
            $table->unsignedInteger('order');

            $table->foreign('abuser_id')->references('id')->on('abusers');
            $table->foreign('ethnicity_id')->references('id')->on('ethnicity');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('abuser_ethnicity', function (Blueprint $table) {
            $table->dropForeign('abuser_ethnicity_ethnicity_id_foreign');
            $table->dropForeign('abuser_ethnicity_abuser_id_foreign');
        });
        Schema::dropIfExists('abuser_ethnicity');
    }
}
