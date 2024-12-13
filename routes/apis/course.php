<?php

use App\Http\Controllers\Apis\CourseController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->prefix('/api')->group(function () {
    Route::apiResource('/courses', CourseController::class)
        ->only(['index', 'show']);
    Route::get('/courses/{id}/contents', [CourseController::class, 'showContents']);
});
