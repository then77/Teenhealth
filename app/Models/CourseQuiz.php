<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Auth;

class CourseQuiz extends Model
{
    protected $table = 'courses_quizzes';

    protected $fillable = [
        'course_id',
        'name',
        'description',
        'questions',
    ];

    protected $casts = [
        'quiz_type' => 'integer',
        'max_questions' => 'integer',
        'min_pass' => 'integer',
        'randomize' => 'boolean',
        'show_answer' => 'integer',
        'result' => 'json',
    ];

    // Relationship to course
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }

    // Relationship to quiz sessions
    public function quizSessions(): HasMany
    {
        return $this->hasMany(QuizSession::class, 'quiz_id');
    }

    // Relationship to questions
    public function questions(): HasMany
    {
        return $this->hasMany(Question::class, 'quiz_id');
    }

    // Helper function for automatic filter for user and admin
    public static function autoFilter($quizzes = null): array
    {
        $new_quizzes = [];

        if ($quizzes == null) {
            $quizzes = CourseQuiz::orderBy('order', 'asc')->get();
        }

        foreach ($quizzes as $quiz) {
            if (Auth::user()->isAdmin()) {
                $new_quizzes[] = $quiz;
            } else {
                $new_quizzes[] = [
                    'id' => $quiz->id,
                    'type' => $quiz->type,
                    'session' => $quiz->session ?? null,
                    'course' => Course::autoFilter([$quiz->course])[0],
                ];
            }
        }

        return $new_quizzes;
    }
}
