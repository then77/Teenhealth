<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Objects\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;

class ForgotController extends Controller
{
    public function send(Request $request)
    {
        // Validate the request data
        try {
            $request->validate([
                'email' => ['required', 'email'],
            ]);
        } catch (ValidationException $error) {
            return ApiResponse::error(
                422, __('validation.new.error', ['attribute' => 'forgot password']),
                $error->errors()
            );
        }

        // try to send reset password email
        $status = Password::sendResetLink($request->only('email'));

        if ($status == Password::RESET_LINK_SENT) {
            return ApiResponse::success(__('passwords.sent'));
        }

        // Add delay to slow down brute force attempts
        sleep(1);

        return ApiResponse::error(401, __('validation.new.error', ['attribute' => 'forgot password']));
    }

    public function reset(Request $request)
    {
        try {
            $request->validate([
                'token' => ['required', 'string'],
                'email' => ['required', 'string', 'email', 'max:255'],
                'newPassword' => [
                    'required', 'string',
                    Rules\Password::min(8)
                        ->letters()
                        ->mixedCase()
                        ->numbers()
                ],
            ]);
        } catch (ValidationException $error) {
            return ApiResponse::error(422, __('validation.new.error', ['attribute' => 'reset password']), $error->errors());
        }

        $credentials = $request->only('email', 'newPassword', 'token');
        $status = Password::reset(
            [
                'email' => $credentials['email'],
                'password' => $credentials['newPassword'],
                'token' => $credentials['token'],
            ],
            function ($user, $password) {
                $user->forceFill(['password' => Hash::make($password)]);

                // reset remember token for security
                $user->setRememberToken(Str::random(60));

                $user->save();
            }
        );

        if ($status == Password::PASSWORD_RESET) {
            return ApiResponse::success(__('passwords.reset'));
        }

        // Add delay to slow down brute force attempts
        sleep(1);

        // detect error token
        if ($status == Password::INVALID_TOKEN) {
            return ApiResponse::error(401, __('passwords.token'));
        }

        return ApiResponse::error(401, __('validation.new.error', ['attribute' => 'reset password']));
    }
}
