<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contenir_cour_classe', function (Blueprint $table) {
            $table->id();
            $table->timestamps();


            $table->unsignedBigInteger('cour_id');
            $table->foreign('cour_id')->references('id')->on('cours');

            $table->unsignedBigInteger('classe_id');
            $table->foreign('classe_id')->references('id')->on('classes');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contenir_cour_classe');
    }
};
