<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Objects\ApiResponse;
use App\Models\UserCourse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class UserCourseController extends Controller
{
    // Get all user courses
    public function index(Request $request)
    {
        $user = $request->user();
        $raw_user_courses = $user->courseEnrollments()
            ->with('course')
            ->get();

        return ApiResponse::success(
            __('base.success_retrieve', ['object' => 'user courses']),
            UserCourse::autoFilter($raw_user_courses)
        );
    }

    // Show a user course
    public function show(Request $request, $id)
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

        $final = UserCourse::autoFilter([$user_course]);
        return ApiResponse::success(
            __('base.success_retrieve', ['object' => 'user course']),
            count($final) == 0 ? [] : $final[0]
        );
    }

    // Add a course to the user
    public function store(Request $request)
    {
        // Validate the request data
        try {
            $request->validate([
                'course' => ['required', 'integer']
            ]);
        } catch (ValidationException $error) {
            return ApiResponse::error(
                422, __('validation.new.error', ['attribute' => 'user course']),
                $error->errors()
            );
        }

        $user = $request->user();
        $course_id = $request->integer('course');
        $course = Course::find($course_id);

        if ($course == null) {
            return ApiResponse::error(404,
                __('validation.new.un',
                    ['attribute' => __('validation.attributes.course')]));
        }

        $user_course = $user->courseEnrollments()
            ->where('course_id', $course->id)
            ->first();

        if ($user_course != null) {
            return ApiResponse::error(
                409, __('validation.course.exists')
            );
        }

        // Get the first course content
        $course_content = $course->contents()
            ->orderBy('order')
            ->first();

        if ($course_content == null) {
            return ApiResponse::error(
                404, __('validation.new.un_now',
                    ['attribute' => __('validation.attributes.course')]
                )
            );
        }

        $user_course = UserCourse::create([
            'user_id' => $user->id,
            'course_id' => $course->id,
            'progress_id' => $course_content->id,
            'progress_percent' => 0,
            'completed' => false
        ]);

        return ApiResponse::success(
            __('base.success_add', ['object' => 'user course']),
            UserCourse::autoFilter([$user_course])[0]
        );
    }

    // Update course progress
    public function update(Request $request, $id)
    {
        // Validate the request data
        try {
            $request->validate([
                'progress' => ['required', 'integer']
            ]);
        } catch (ValidationException $error) {
            return ApiResponse::error(
                422, __('validation.new.error', ['attribute' => 'user course']),
                $error->errors()
            );
        }

        // Get the user course
        $user = $request->user();
        $user_course = $user->courseEnrollments()
            ->where('course_id', $id)
            ->first();

        if ($user_course == null) {
            return ApiResponse::error(
                404, __('validation.course.not_exists')
            );
        }

        // Check if course is already completed
        if ($user_course->completed) {
            return ApiResponse::error(
                409, __('validation.course.completed')
            );
        }

        // Get current course
        $progress_id = $request->integer('progress');
        $current_content = $user_course->course->contents()
            ->where('id', $progress_id)
            ->first();

        if ($current_content == null) {
            return ApiResponse::error(
                404, __('validation.new.un', [
                    'attribute' => __('validation.attributes.content')
                ])
            );
        }

        // Check if current_content id is same as user_course progress_id
        if ($current_content->id != $user_course->progress_id) {
            return ApiResponse::error(
                409, __('validation.course.progress')
            );
        }

        // Get all course contents size
        $total_contents = $user_course->course->contents()
            ->count();

        // Check if this course has quiz
        $quiz = $user_course->course->quiz()
            ->first();

        // Get progress percent with added 1 for quiz, and round it
        $progress_percent = round(($current_content->order / ($total_contents+(
            $quiz != null && $quiz->enabled ? 1 : 0)))*100);

        // Determine response
        $response = [
            'progress_percent' => $progress_percent,
        ];

        if ($current_content->order >= $total_contents) {

            if ($quiz != null && $quiz->enabled) {
                $response['action'] = 'quiz';
            } else {
                $response['action'] = 'completed';
            }

        } else {
            $next_content = $user_course->course->contents()
                ->where('order', $current_content->order + 1)
                ->first();

            $user_course->update([
                'progress_id' => $next_content->id,
                'progress_percent' => $progress_percent
            ]);

            $response['progress_id'] = $next_content->id;

            if ($current_content->order >= $total_contents-1) {
                if ($quiz != null && $quiz->enabled) {
                    $response['action'] = 'next_then_quiz';
                } else {
                    $response['action'] = 'next_then_complete';
                }
            } else {
                $response['action'] = 'next';
            }
        }

        return ApiResponse::success(
            __('base.success_update', ['object' => 'user course']),
            $response
        );
    }
}
