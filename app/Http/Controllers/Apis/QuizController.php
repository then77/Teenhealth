<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\CourseQuiz;
use App\Models\Objects\ApiResponse;
use App\Models\Quiz;
use App\Models\QuizSession;
use App\Services\ThService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use function Symfony\Component\Translation\t;

class QuizController extends Controller
{
    // Get all quizzes
    public function index(Request $request)
    {
        $quizzes = CourseQuiz::orderBy('order', 'asc')->get();

        // Combine by check for quiz sessions
        foreach ($quizzes as $quiz) {
            $quiz_session = QuizSession::where('quiz_id', $quiz->id)
                ->where('user_id', Auth::id())->first();

            if ($quiz_session == null) continue;
            $quiz->session = QuizSession::autoFilter(
                [$quiz_session],
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

        // Check if quiz is completed
        if ($quiz->completed) {
            $response = $this->getResult($quiz->quiz_id);

            if (is_a($response, 'Illuminate\Http\JsonResponse')) {
                return $response;
            }
            $quiz->result = $response;
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

        // Get response content
        $response = ThService::getCourseProgress(
            $request->integer('quiz'),
            null, false
        );

        // Check if response is JSONResponse
        if (is_a($response, 'Illuminate\Http\JsonResponse')) {
            return $response;
        }

        // Destructure response
        $user_course = $response['user_course'];
        $current_content = $response['current_content'];
        $total_contents = $response['total_contents'];
        $quiz = $response['quiz'];
        $progress_percent = $response['progress_percent'];

        if ($progress_percent < 100) {
            return ApiResponse::error(
                409, __('validation.course.progress'),
                ['progress' => $progress_percent]
            );
        }

        // Get actual quiz id from course id
        $quiz = CourseQuiz::where('course_id', $user_course->course_id)
            ->first();

        // Check if session_quiz with that quiz_id already exists
        $quiz_session = QuizSession::where('quiz_id', $quiz->id)
            ->where('user_id', Auth::id())
            ->first();

        if ($quiz_session != null) {
            return ApiResponse::error(
                409, __('validation.session.exists')
            );
        }

        $quiz_session = new QuizSession();
        $quiz_session->quiz_id = $quiz->id;
        $quiz_session->user_id = Auth::id();
        $quiz_session->completed = false;
        $quiz_session->answers = [];
        $quiz_session->save();

        return ApiResponse::success(
            __('base.success_add',
                ['object' => __('validation.attributes.session')]),
            QuizSession::autoFilter([$quiz_session])[0]
        );
    }

    // Function to get result of answered quiz
    private function getResult(int $quiz_id) {
        $quiz = CourseQuiz::find($quiz_id);
        $quiz_session = QuizSession::where('quiz_id', $quiz_id)
            ->where('user_id', Auth::id())
            ->first();

        if ($quiz_session == null) {
            return ApiResponse::error(
                404, __('validation.new.un',
                    ['attribute' => __('validation.attributes.session')])
            );
        }

        $answers = $quiz_session->answers;
        $questions = [];

        foreach ($quiz->questions as $question) {
            // check if question.id exists in as key in answers
            if (array_key_exists($question->id, $answers)) {
                $questions[] = $question;
            }
        }

        $correct = 0;
        $total = count($questions);

        foreach ($questions as $question) {
            // get answer
            $answer = $answers[$question->id];

            // get answer with answers from question
            $result = $question->answer[$answer];
            $correct = $result['poin'];
        }

        // Categorize result from quiz result based on correct
        // Example: [{"min": 0, "max": 50, "title": "...", "description": "..."}]
        $category = $quiz->result;

        // Get title and description based on correct
        $title = null;
        $description = null;

        foreach ($category as $cat) {
            if ($correct >= $cat['min'] && $correct <= $cat['max']) {
                $title = $cat['title'];
                $description = $cat['description'];
                break;
            }
        }

        return [
            'correct' => $correct,
            'total' => $total,
            'percentage' => ($correct / $total) * 100,
            'title' => $title,
            'description' => $description
        ];
    }
}
