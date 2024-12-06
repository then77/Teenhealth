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
        Schema::create('users_courses', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            // Set column user_id as an id to be foreign.
            // use constrained() to automatically determine
            // column based on "users.id".
            $table->foreignId('user_id')
                ->constrained()
                ->onDelete('cascade');

            // Set column course_id as an id to be foreign.
            // use constrained() to automatically determine
            // column based on "courses.id".
            $table->foreignId('course_id')
                ->constrained()
                ->onDelete('cascade');

            // Set column course_id as an id to be foreign.
            // use constrained() to determine
            // column based on "courses_contents.id".
            // Set null when the course content is deleted.
            $table->foreignId('progress_id')
                ->nullable()
                ->constrained('courses_contents')
                ->onDelete('set null');

            $table->unsignedTinyInteger('progress_percent');
            $table->boolean('completed')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users_courses');
    }
};
