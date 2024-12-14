<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Auth;

class QuizSession extends Model
{
    protected $table = 'quiz_sessions';

    protected $fillable = [
        'quiz_id',
        'user_id',
        'completed',
        'answers',
    ];

    protected $casts = [
        'completed' => 'boolean',
        'answers' => 'json',
    ];

    // Relationship to quiz
    public function quiz(): BelongsTo
    {
        return $this->belongsTo(CourseQuiz::class, 'quiz_id');
    }

    // Helper function for automatic filter for user and admin
    public static function autoFilter($quiz_sessions = null, bool $disableRecursive = false): array
    {
        $new_quiz_sessions = [];

        if ($quiz_sessions == null) {
            $quiz_sessions = QuizSession::all()
                ->orderBy('updated_at', 'desc');
        }

        foreach ($quiz_sessions as $quiz_session) {
            if (Auth::user()->isAdmin()) {
                $new_quiz_sessions[] = $quiz_session;
            } else if (!$disableRecursive) {
                $new_quiz_sessions[] = [
                    'id' => $quiz_session->id,
                    'completed' => $quiz_session->completed,
                    'quiz' => CourseQuiz::autoFilter([$quiz_session->quiz])[0],
                    'result' => $quiz_session->result,
                ];
            } else {
                $new_quiz_sessions[] = [
                    'id' => $quiz_session->id,
                    'completed' => $quiz_session->completed,
                    'result' => $quiz_session->result,
                ];
            }
        }

        return $new_quiz_sessions;
    }
}
