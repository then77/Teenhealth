<?php

use App\Http\Controllers\Apis\UserController;
use App\Http\Controllers\Apis\UserCourseController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->prefix('/api')->group(function () {
    Route::apiResource('/user', UserController::class)
        ->only(['index', 'store']);

    Route::apiResource('/user/courses', UserCourseController::class)
        ->only(['index', 'show', 'store', 'update']);
});
