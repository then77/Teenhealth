<?php

namespace App\Http\Controllers\Auth;

use App\Models\Objects\ApiResponse;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        // Validate the request data
        try {
            $credentials = $request->validate([
                'email' => ['required'],
                'password' => ['required'],
            ]);
        } catch (ValidationException $error) {
            return ApiResponse::error(
                422, __('validation.new.error', ['attribute' => 'login']),
                $error->errors()
            );
        }

        $remember = $request->boolean('remember');

        // attempt to authenticate the user
        if (Auth::attempt($credentials, $remember)) {

            // Regenerate session for security
            $request->session()->regenerate();

            return ApiResponse::success(__('auth.success', ['action' => 'Login']));
        }

        // Add delay to slow down brute force attempts
        sleep(1);

        return ApiResponse::error(401, __('auth.failed'));
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return ApiResponse::success(__('base.success', ['action' => 'logout']));
    }
}
