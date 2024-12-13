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

    // Helper function for automatic filter for user and admin
    public static function autoFilter($user_courses = null): array
    {
        $new_user_courses = [];

        if ($user_courses == null) {
            $user_courses = UserCourse::all()->sortBy('updated_at');
        }

        foreach ($user_courses as $user_course) {
            $new_user_courses[] = [
                'created_at' => $user_course->created_at,
                'updated_at' => $user_course->updated_at,
                'course' => Course::autoFilter([$user_course->course])[0],
                'progress_id' => $user_course->progress_id,
                'progress_percent' => $user_course->progress_percent,
                'completed' => $user_course->completed
            ];
        }

        return $new_user_courses;
    }
}
