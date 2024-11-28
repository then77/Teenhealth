<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'comingsoon');

Route::view('dashboard', 'dashboard')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');

// Temporary 404
Route::fallback(function () {
    return view('comingsoon');
});

require __DIR__.'/auth.php';
