<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;
use App\Services\Th;

class ThFacades extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return Th::class;
    }
}
