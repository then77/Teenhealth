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
        Schema::create('courses_quizzes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            // Make sure course quiz can be disabled/hidden.
            $table->boolean('enabled')->default(false);

            // Set column course_id as an id to be foreign.
            // use constrained() to automatically determine
            // column based on "courses.id".
            $table->foreignId('course_id')
                ->constrained()
                ->onDelete('cascade');

            // Quiz type. No function to client currently.
            $table->unsignedTinyInteger('type');

            // Max question to be shown to user.
            // Useful to limit questions when quiz is randomized.
            $table->unsignedTinyInteger('max_required_answer');

            // Minimum correct answer to be determined as passed.
            $table->unsignedTinyInteger('min_pass_answer');

            // Set this quiz questions to be randomized.
            $table->boolean('randomize')->default(false);

            // Set how the quiz should show the correct answer.
            // 0 - Disable the feature
            // 1 - Show after quiz end
            // 2 - Show every question next
            $table->unsignedTinyInteger('show_answer')
                ->default(0);

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses_quizzes');
    }
};
