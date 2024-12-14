<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Auth;

class Course extends Model
{
    protected $fillable = [
        'enabled',
        'order',
        'name',
        'description',
        'banner_url',
        'theme_color',
    ];

    protected $casts = [
        'enabled' => 'boolean',
        'theme_color' => 'integer',
    ];

    // Relationship to get all course enrollments
    public function enrollments(): HasMany
    {
        return $this->hasMany(UserCourse::class);
    }

    // Relationship to get users through the pivot table
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'users_courses')
            ->withPivot(['progress_id', 'progress_percent', 'completed'])
            ->withTimestamps();
    }

    // Relationship to get all course contents
    public function contents(): HasMany
    {
        return $this->hasMany(CourseContent::class);
    }

    // Relationship to quiz
    public function quiz(): HasMany
    {
        return $this->hasMany(CourseQuiz::class);
    }

    // Helper function for automatic filter for user and admin
    public static function autoFilter($courses = null): array
    {
        $new_courses = [];

        if ($courses == null) {
            $courses = Course::orderBy('order', 'asc')->get();
        }

        foreach ($courses as $course) {
            if (Auth::user()->isAdmin()) {
                $new_courses[] = $course;
            } else if ($course->enabled) {
                $new_courses[] = [
                    'id' => $course->id,
                    'name' => $course->name,
                    'description' => $course->description,
                    'banner_url' => $course->banner_url,
                    'theme_color' => $course->theme_color,
                ];
            }
        }
        return $new_courses;
    }
}
