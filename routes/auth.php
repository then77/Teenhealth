<?php

use App\Http\Controllers\Auth;
use App\Http\Controllers\Base\IndexController;
use Illuminate\Support\Facades\Route;

Route::middleware(['guest', 'throttle:auth'])->group(function () {

    Route::post('/login', [Auth\LoginController::class, 'login']);
    Route::post('/register', [Auth\RegisterController::class, 'register']);
    // Route::post('/forgot-password', []);
    // Route::post('/forgot-password/r/{token}', []);
});

Route::post('/logout', [Auth\LoginController::class, 'logout'])
    ->middleware('auth');

// Fallback other routes to react
Route::middleware('guest')->group(function () {
    Route::get('/login', [IndexController::class, 'index']);
    Route::get('/register', [IndexController::class, 'index']);
    Route::get('/forgot-password', [IndexController::class, 'index']);
    Route::get('/forgot-password/r/{token}', [IndexController::class, 'index']);
});
