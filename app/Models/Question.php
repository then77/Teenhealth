<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Question extends Model
{
    protected $fillable = [
        'quiz_id',
        'order',
        'question',
        'options',
        'answer',
    ];

    protected $casts = [
        'order' => 'integer',
        'question' => 'array',
        'options' => 'array',
        'answer' => 'array',
    ];

    // Helper function for automatic filter for user and admin
    public static function autoFilter($questions = null): array
    {
        $new_questions = [];

        if ($questions == null) {
            $questions = Question::orderBy('order', 'asc')->get();
        }

        foreach ($questions as $question) {
            if (Auth::user()->isAdmin()) {
                $new_questions[] = $question;
            } else {
                $new_questions[] = [
                    'id' => $question->id,
                    'question' => $question->question,
                    'options' => $question->options,
                ];
            }
        }

        return $new_questions;
    }
}
