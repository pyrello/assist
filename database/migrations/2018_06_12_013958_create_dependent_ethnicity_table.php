<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDependentEthnicityTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dependent_ethnicity', function (Blueprint $table) {
            $table->integer('dependent_id')->unsigned();
            $table->integer('ethnicity_id')->unsigned();
            $table->unsignedInteger('order');

            $table->foreign('dependent_id')->references('id')->on('dependents');
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
        Schema::table('dependent_ethnicity', function (Blueprint $table) {
            $table->dropForeign('dependent_ethnicity_ethnicity_id_foreign');
            $table->dropForeign('dependent_ethnicity_dependent_id_foreign');
        });
        Schema::dropIfExists('dependent_ethnicity');
    }
}
