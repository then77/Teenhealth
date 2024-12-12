<?php

use App\Http\Controllers\Base;
use Illuminate\Support\Facades\Route;

Route::get('/', [Base\IndexController::class, 'index'])
    ->name('index')
    ->fallback();

Route::get('/{react}', [Base\IndexController::class, 'index'])
    ->where('react', '^(?!(\/?)(api\/.*|admin(\/.*)?|login|register|forgot-password(\/r\/.*)?)).+');

require __DIR__.'/auth.php';
