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
        Schema::create('quizzes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            // New: remove course relation, added title and description
            $table->string('name');
            $table->longText('description')->nullable();

            // Make sure course quiz can be disabled/hidden.
            $table->boolean('enabled')->default(false);

            // Quiz type. No function to client currently.
            $table->unsignedTinyInteger('type');

            $table->unsignedSmallInteger('order');

            // Max question to be shown to user.
            // Useful to limit questions when quiz is randomized.
            // Not used if not randomized
            $table->unsignedTinyInteger('max_required_answer')
                ->nullable();

            // Set this quiz questions to be randomized.
            $table->boolean('randomize')->default(false);

            // Set how the quiz should show the correct answer.
            // 0 - Disable the feature
            // 1 - Show after quiz end
            // 2 - Show every question next
            $table->unsignedTinyInteger('show_answer')
                ->default(0);

            // New: result to show based on points
            $table->json('result')
                ->nullable();

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
