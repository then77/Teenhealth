<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\CourseQuiz;
use App\Models\Objects\ApiResponse;
use App\Models\Quiz;
use App\Models\QuizSession;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use function Symfony\Component\Translation\t;

class QuizController extends Controller
{
    // Get all quizzes
    public function index(Request $request)
    {
        $quizzes = CourseQuiz::all()
            ->sortBy('order');

        // Combine by check for quiz sessions
        foreach ($quizzes as $quiz) {
            $quiz->session = QuizSession::autoFilter(
                [QuizSession::where('quiz_id', $quiz->id)
                    ->where('user_id', Auth::id())->first()],
                true
            )[0];
        }

        return ApiResponse::success(
            __('base.success_retrieve', ['object' => 'quizzes']),
            CourseQuiz::autoFilter($quizzes)
        );
    }

    // Get existing quiz session
    public function show(Request $request, $id)
    {
        $quiz = QuizSession::find($id);
        if ($quiz == null || (
            !Auth::user()->isAdmin()
            && $quiz->user_id != Auth::id())
        ) {
            return ApiResponse::error(
                404, __('validation.new.un',
                    ['attribute' => __('validation.attributes.session')])
            );
        }

        return ApiResponse::success(
            __('base.success_retrieve', ['object' => 'quiz session']),
            QuizSession::autoFilter([$quiz])[0]
        );
    }

    // Request quiz session
    public function store(Request $request)
    {
        // Validate the request data
        try {
            $request->validate([
                'quiz' => ['required', 'integer']
            ]);
        } catch (ValidationException $error) {
            return ApiResponse::error(
                422, __('validation.new.error',
                    ['attribute' => __('validation.attributes.session')]),
                $error->errors()
            );
        }

        $quiz = QuizSession::where('id', $request->only('quiz'))
            ->where('user_id', Auth::id())->first();

        if ($quiz !== null) {
            return ApiResponse::error(
                404, __('validation.new.un',
                    ['attribute' => __('validation.attributes.session')])
            );
        }

        // Get user course content
        $course = Course::find($request->quiz);
        $user_course = Auth::user()->courseEnrollments()
            ->where('course_id', $course->id)
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
        $current_content = $user_course->course->contents()
            ->where('id', $user_course->progress_id)
            ->first();

        if ($current_content == null) {
            return ApiResponse::error(
                404, __('validation.new.un',
                    ['attribute' => __('validation.attributes.content')])
            );
        }

        $total_contents = $user_course->course->contents()
            ->count();

        // Check if this course has reached max content
        $progress_percent = round(($current_content->order / ($total_contents*1)));
        if ($progress_percent < 1) {
            return ApiResponse::error(
                409, __('validation.course.progress'),
                ['progress' => $progress_percent]
            );
        }

        $quiz_session = new QuizSession();
        $quiz_session->quiz_id = $request->integer('quiz');
        $quiz_session->user_id = Auth::id();
        $quiz_session->completed = false;
        $quiz_session->answers = [];
        $quiz_session->save();

        return ApiResponse::success(
            __('base.success_create',
                ['object' => __('validation.attributes.session')]),
            QuizSession::autoFilter([$quiz_session])[0]
        );
    }
}
