<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use App\Models\CourseQuiz;
use App\Models\Objects\ApiResponse;
use App\Models\Question;
use App\Models\QuizSession;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class QuizSessionController extends Controller
{
    // Get question for session
    // (should only be used by client once per session)
    public function show(Request $request, $id)
    {
        $quiz_session = QuizSession::find($id);
        if ($quiz_session == null) {
            return ApiResponse::error(
                404, __('validation.new.un',
                    ['attribute' => __('validation.attributes.session')])
            );
        }

        // Check if question_id is not null
        $question_id = $quiz_session->question_id;
        $question = null;

        if ($question_id == null) {
            $response = $this->generateQuestion(
                $quiz_session->quiz_id);

            if (is_a($response, 'Illuminate\Http\JsonResponse')) {
                return $response;
            }

            // Update session with new question
            $quiz_session->question_id = $response->id;
            $quiz_session->save();

            $question = $response;
        } else {
            $question = CourseQuiz::find($quiz_session->quiz_id)
                ->questions()
                ->where('id', $question_id)
                ->first();
        }

        if ($question == null) {
            return ApiResponse::error(
                404, __('validation.new.un',
                    ['attribute' => __('validation.attributes.question')])
            );
        }

        return ApiResponse::success(
            __('base.success_retrieve', [
                'object' => __('validation.attributes.question')
            ]),
            [
                'question' => Question::autoFilter([$question])[0],
                'session' => QuizSession::autoFilter([$quiz_session])[0]
            ]
        );
    }

    // Submit answer for session
    public function update(Request $request, $id)
    {
        // Validate the request data
        try {
            $request->validate([
                'question' => ['required', 'integer'],
                'answer' => ['required', 'integer']
            ]);
        } catch (ValidationException $error) {
            return ApiResponse::error(
                422, __('validation.new.error',
                    ['attribute' => 'answer']),
                $error->errors()
            );
        }

        $quiz_session = QuizSession::find($id);
        if ($quiz_session == null) {
            return ApiResponse::error(
                404, __('validation.new.un',
                    ['attribute' => __('validation.attributes.session')])
            );
        }

        // Check if quiz session is completed
        if ($quiz_session->completed) {
            return ApiResponse::error(
                400, __('validation.session.completed')
            );
        }

        // Check if question_id is valid
        $question_id = $request->integer('question');
        $question = CourseQuiz::find($quiz_session->quiz_id)
            ->questions()
            ->where('id', $question_id)
            ->first();

        if ($question == null) {
            return ApiResponse::error(
                404, __('validation.new.un',
                    ['attribute' => __('validation.attributes.question')])
            );
        }

        // Save answer option
        $answer = $request->integer('answer');
        $answers = $quiz_session->answers;
        $answers[$question_id] = $answer;
        $quiz_session->answers = $answers;
        $quiz_session->save();

        // Determine next question
        $action = null;

        // Check for max questions
        $quiz = CourseQuiz::find($quiz_session->quiz_id);
        $max_questions = $quiz->max_required_answer;

        if (count($answers) >= $max_questions) {
            $quiz_session->completed = true;
            $quiz_session->save();
            $action = 'completed';

            return ApiResponse::success(
                __('base.success_update', [
                    'object' => __('validation.attributes.session')]),
                [
                    'answers' => $answers,
                    'action' => $action
                ]
            );
        }

        $action = (count($answers) >= $max_questions - 1) ?
            'next_then_complete' : 'next';
        $response = $this->generateQuestion(
            $quiz_session->quiz_id, $answers);

        if (is_a($response, 'Illuminate\Http\JsonResponse')) {
            return $response;
        }

        // Update session with new question
        $quiz_session->question_id = $response->id;
        $quiz_session->save();

        return ApiResponse::success(
            __('base.success_update', [
                'object' => __('validation.attributes.session')]),
            [
                'question' => Question::autoFilter([$response])[0],
                'action' => $action
            ]
        );
    }

    // Function to generate question for session
    private function generateQuestion(int $quiz_id, array $answers = []){
        // Get quiz from quiz_id
        $quiz = CourseQuiz::find($quiz_id)
            ->with('questions')
            ->first();

        if ($quiz == null) {
            return ApiResponse::error(
                404, __('validation.new.un',
                    ['attribute' => __('validation.attributes.quiz')])
            );
        }

        $randomize = $quiz->randomize;

        // Get all question from Question
        $questions = $quiz->questions->sortBy('order');

        // Eliminate questions that have been answered
        // answer is stored in answers as key-value pair
        foreach ($answers as $question_id => $answer) {
            $questions = $questions->filter(function ($question) use ($question_id) {
                return $question->id != $question_id;
            });
        }

        // If randomize is true, shuffle the questions
        if ($randomize) {
            $questions = $questions->shuffle();
        }

        // Return the first question
        return $questions->first();
    }
}
