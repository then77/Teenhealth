<?php

use App\Http\Controllers\Apis\UserCourseController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->prefix('/api/user')->group(function () {
    Route::apiResource('courses', UserCourseController::class)
        ->only(['index', 'show', 'store', 'update']);
});
