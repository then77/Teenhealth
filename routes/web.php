<?php

use App\Http\Controllers\Base;
use Illuminate\Support\Facades\Route;

Route::get('/', [Base\IndexController::class, 'index'])
    ->name('index')
    ->fallback();

//Route::view('dashboard', 'dashboard')
//    ->middleware(['auth', 'verified'])
//    ->name('dashboard');
//
//Route::view('profile', 'profile')
//    ->middleware(['auth'])
//    ->name('profile');

//// Temporary 404
//Route::fallback(function () {
//    return view('comingsoon');
//});

Route::get('/{react}', [Base\IndexController::class, 'index'])
    ->where('react', '^(?!(\/?)(api\/.*|admin(\/.*)?|login|register|forgot-password(\/r\/.*)?)).+');

require __DIR__.'/auth.php';
