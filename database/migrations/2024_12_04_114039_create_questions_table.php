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
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            // Set column quiz_id as an id to be foreign.
            // use constrained() to determine
            // column based on "courses_quizzes.id".
            $table->foreignId('quiz_id')
                ->constrained('courses_quizzes')
                ->onDelete('cascade');

            $table->unsignedSmallInteger('order');

            // As question can contain text and/or one/many images,
            // It's better to use organized json instead.
            $table->json('question');

            // As options and answer can be multiple type and content
            // (single/multiple choice, text input, fill in the blank, etc.)
            // It's better to use organized json instead.
            $table->json('options');
            $table->json('answer');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questions');
    }
};
