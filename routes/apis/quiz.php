<?php

use App\Http\Controllers\Apis\QuizController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->prefix('/api')->group(function () {
    Route::apiResource('/quizzes', QuizController::class)
        ->only(['index', 'show', 'store']);
});
