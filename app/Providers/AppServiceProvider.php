<?php

namespace App\Providers;

use App\Models\Objects\ApiResponse;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\RateLimiter;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Force https on production
        if ($this->app->environment('production')) {
            URL::forceScheme('https');
        }

        // Register global rate limit
        RateLimiter::for('global', function (Request $request) {
            return Limit::perMinute(1000);
        });

        // Register auth rate limit
        RateLimiter::for('auth', function (Request $request) {
            $apiResponse = function () {
                return ApiResponse::error(429, __('auth.throttle'));
            };

            return [
                Limit::perMinute(8)
                    ->by($request->ip())
                    ->response($apiResponse),
                Limit::perMinutes(5, 20)
                    ->by($request->ip())
                    ->response($apiResponse)
            ];
        });
    }
}
