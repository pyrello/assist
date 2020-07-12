<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSoftDeletesToMainObjects extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('abusers', function (Blueprint $table) {
            $table->softDeletes();
        });

        Schema::table('activities', function (Blueprint $table) {
            $table->softDeletes();
        });

        Schema::table('advocates', function (Blueprint $table) {
            $table->softDeletes();
        });

        Schema::table('client_outcome', function (Blueprint $table) {
            $table->softDeletes();
        });

        Schema::table('client_relationships', function (Blueprint $table) {
            $table->softDeletes();
        });

        Schema::table('intakes', function (Blueprint $table) {
            $table->softDeletes();
        });

        Schema::table('incidents', function (Blueprint $table) {
            $table->softDeletes();
        });

        Schema::table('notes', function (Blueprint $table) {
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('abusers', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });

        Schema::table('activities', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });

        Schema::table('advocates', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });

        Schema::table('client_outcome', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });

        Schema::table('client_relationships', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });

        Schema::table('intakes', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });

        Schema::table('incidents', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });

        Schema::table('notes', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
}
