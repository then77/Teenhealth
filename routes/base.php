<?php

use Illuminate\Support\Facades\Route;

Route::get('/{react}', [Base\IndexController::class, 'index'])
    ->where('react', '^(?!(\/?)(api\/.*|admin(\/.*)?|login|register|forgot-password(\/reset)?)).+');
