<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\CourseContent;
use App\Models\Objects\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CourseController extends Controller
{

    // Get all courses
    public function index(Request $request)
    {
        $courses = Course::autoFilter();
        return ApiResponse::success(
            __('base.success_retrieve', ['object' => 'courses']),
            $courses
        );
    }

    // Show a course
    public function show(Request $request, $id)
    {
        $course = Course::find($id);
        if ($course == null) {
            return ApiResponse::error(
                404, __('validation.new.un',
                    ['attribute' => __('validation.attributes.course')])
            );
        }

        $final = Course::autoFilter([$course]);
        if (count($final) == 0) {
            return ApiResponse::error(
                404, __('validation.new.un',
                    ['attribute' => __('validation.attributes.course')])
            );
        }

        return ApiResponse::success(
            __('base.success_retrieve', ['object' => 'course']),
            $final[0]
        );
    }

    // Show a course with contents
    public function showContents(Request $request, $id)
    {
        $user = $request->user();
        $user_course = $user->courseEnrollments()
            ->where('course_id', $id)
            ->first();

        if ($user_course == null) {
            return ApiResponse::error(
                404, __('validation.course.not_exists')
            );
        }

        $contents = $user_course->course->contents;
        return ApiResponse::success(
            __('base.success_retrieve', ['object' => 'course contents']),
            CourseContent::autoFilter($contents->sortBy('order'))
        );
    }
}
