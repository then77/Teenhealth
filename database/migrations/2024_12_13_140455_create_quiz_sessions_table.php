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
        Schema::create('quiz_sessions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            // Set column quiz_id as an id to be foreign.
            // use constrained() to determine
            // column based on "courses_quizzes.id".
            $table->foreignId('quiz_id')
                ->constrained('courses_quizzes')
                ->onDelete('cascade');

            // Set column user_id as an id to be foreign.
            // use constrained() to automatically determine
            // column based on "users.id".
            $table->foreignId('user_id')
                ->constrained()
                ->onDelete('cascade');

            // Set column question_id as an id to be foreign.
            // use constrained() to automatically determine
            // column based on "questions.id" and nullable.
            $table->foreignId('question_id')
                ->nullable()
                ->constrained('questions')
                ->onDelete('cascade');

            $table->boolean('completed')->default(false);
            $table->json('answers');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quiz_sessions');
    }
};
