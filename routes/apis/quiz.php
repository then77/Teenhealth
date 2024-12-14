<?php

use App\Http\Controllers\Apis\QuizController;
use App\Http\Controllers\Apis\QuizSessionController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->prefix('/api')->group(function () {
    Route::apiResource('/quizzes', QuizController::class)
        ->only(['index', 'show', 'store']);

    Route::apiResource('/quizzes/session', QuizSessionController::class)
        ->only(['show', 'update']);
});
