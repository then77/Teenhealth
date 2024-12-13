<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CourseQuiz extends Model
{
    protected $table = 'courses_quizzes';

    protected $fillable = [
        'course_id',
        'name',
        'description',
        'questions',
    ];

    // Relationship to course
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }
}
