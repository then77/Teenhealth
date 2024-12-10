<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

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
}
