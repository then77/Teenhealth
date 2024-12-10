<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class Th
{
    /**
     * Load user data for the store
     *
     * @return array|null
     */
    public static function loadStore(): ?string
    {

        $final = [
            'user' => self::partialUserData(),
            'joined_courses' => self::joinedCourses()
        ];
        return base64_encode(json_encode($final));
    }

    public static function partialUserData(): ?array
    {
        $user = Auth::user();

        if (!$user) {
            return null;
        }

        $data = [
            'name' => $user->name,
            'email' => $user->email,
            'profile_pic' => $user->profile_pic,
        ];

        // Only add is_admin to array if true
        if ($user->is_admin) {
            $data['is_admin'] = true;
        }

        return $data;
    }

    public static function joinedCourses(): ?array {
        $user = Auth::user();

        if (!$user) {
            return null;
        }

        $enrolledCourses = $user->courseEnrollments()->with('course')->get();

        $courses = [];
        foreach ($enrolledCourses as $enrolledCourse) {
            $course = $enrolledCourse->course;
            $courses[] = [
                'id' => $course->id,
                'name' => $course->name,
                'description' => $course->description,
                'banner_url' => $course->banner_url,
                'theme_color' => $course->theme_color,
            ];
        }

        return $courses;
    }
}
