<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CourseContent extends Model
{
    protected $table = 'courses_contents';

    protected $fillable = [
        'course_id',
        'order',
        'title',
        'json_content'
    ];

    protected $casts = [
        'order' => 'integer',
        'json_content' => 'json'
    ];

    // Relationship to course
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }

    // Helper function for automatic filter for user and admin
    public static function autoFilter($contents = null): array
    {
        $new_contents = [];

        if ($contents == null) {
            $contents = CourseContent::all()
                ->sortBy('order');
        }

        foreach ($contents as $content) {
            $new_contents[] = [
                'id' => $content->id,
                'order' => $content->order,
                'title' => $content->title,
                'json_content' => $content->json_content,
            ];
        }

        return $new_contents;
    }
}
