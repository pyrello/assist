<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientEthnicityTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('client_ethnicity', function (Blueprint $table) {
            $table->integer('client_id')->unsigned();
            $table->integer('ethnicity_id')->unsigned();
            $table->unsignedInteger('order');

            $table->foreign('client_id')->references('id')->on('clients');
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
        Schema::table('client_ethnicity', function (Blueprint $table) {
            $table->dropForeign('client_ethnicity_ethnicity_id_foreign');
            $table->dropForeign('client_ethnicity_client_id_foreign');
        });
        Schema::dropIfExists('client_ethnicity');

    }
}
