<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserCourse extends Model
{
    protected $table = 'users_courses';

    protected $fillable = [
        'user_id',
        'course_id',
        'progress_id',
        'progress_percent',
        'completed',
    ];

    protected $casts = [
        'progress_percent' => 'integer',
        'completed' => 'boolean',
    ];

    // Relationship to user
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // Relationship to course
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }
}
