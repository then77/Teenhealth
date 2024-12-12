<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;
use App\Services\ThService;

class ThFacade extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return ThService::class;
    }
}
