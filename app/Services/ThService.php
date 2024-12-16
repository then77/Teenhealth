<?php

namespace App\Services;

use App\Models\Objects\ApiResponse;
use App\Models\QuizSession;
use App\Models\User;
use App\Models\UserCourse;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class ThService
{
    /**
     * Load user data for the store
     *
     * @return array|null
     */
    public static function loadStore(): ?string
    {

        $quiz_session = self::quizSession();
        $final = [
            'user' => self::partialUserData(),
            'quiz_session' => $quiz_session ? [
                'id' => $quiz_session->id,
                'name' => $quiz_session->quiz->name,
            ] : null,
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
        if ($user->isAdmin()) {
            $data['is_admin'] = true;
        }

        return $data;
    }

    public static function userData(): ?array
    {
        $user = Auth::user();

        if (!$user) {
            return null;
        }

        $data = [
            'name' => $user->name,
            'email' => $user->email,
            'profile_pic' => $user->profile_pic,
            'email_verified_at' => $user->email_verified_at,
            'created_at' => $user->created_at,
            'updated_at' => $user->updated_at
        ];

        // Only add is_admin to array if true
        if ($user->isAdmin()) {
            $data['is_admin'] = true;
        }

        return $data;
    }

    public static function quizSession(): mixed
    {
        return QuizSession::where('user_id', Auth::id())
            ->where('completed', false)
            ->orderBy('updated_at', 'desc')
            ->first();
    }

    public static function getCourseProgress(
        int $course_id, ?int $progress_id,
        bool $fullcheck = true
    ): JsonResponse|array
    {
        // Get the user course
        $user = Auth::user();
        $user_course = $user->courseEnrollments()
            ->where('course_id', $course_id)
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
        if ($progress_id == null) {
            $progress_id = $user_course->progress_id;
        }

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
        if (
            $fullcheck &&
            $current_content->id != $user_course->progress_id
        ) {
            return ApiResponse::error(
                409, __('validation.course.progress')
            );
        }

        // Get all course contents size
        $total_contents = $user_course->course->contents()
            ->count();

        // Get progress percent with added 1 for quiz, and round it
        $progress_percent = round(($current_content->order / $total_contents)*100);

        return [
            'user_course' => $user_course,
            'current_content' => $current_content,
            'total_contents' => $total_contents,
            'progress_percent' => $progress_percent,
        ];
    }
}
