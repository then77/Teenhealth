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
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            // Make sure course can be disabled/hidden.
            $table->boolean('enabled')->default(false);

            $table->unsignedSmallInteger('order');
            $table->string('name');
            $table->longText('description')->nullable();
            $table->text('banner_url')->nullable();

            // Used for course theme color on client side.
            $table->unsignedTinyInteger('theme_color')
                ->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
