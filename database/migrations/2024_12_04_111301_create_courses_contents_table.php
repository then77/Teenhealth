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
        Schema::create('courses_contents', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            // Set column course_id as an id to be foreign.
            // use constrained() to automatically determine
            // column based on "courses.id".
            $table->foreignId('course_id')
                ->constrained()
                ->onDelete('cascade');

            $table->unsignedSmallInteger('order');
            $table->text('title');

            // The exact data that will be
            // required by client is still unknown.
            // So we'll use json as temporary approach.
            $table->json('json_content');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses_contents');
    }
};
