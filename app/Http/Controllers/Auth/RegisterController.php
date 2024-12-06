<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Objects\ApiResponse;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        // Validate the request data
        try {
            $credentials = $request->validate([
                'email' => ['required', 'email'],
                'name' => ['required', 'string', 'min:3'],
                'password' => [
                    'required', 'string',
                    Password::min(8)
                        ->letters()
                        ->mixedCase()
                        ->numbers()
                ],
            ]);
        } catch (ValidationException $error) {
            sleep(1);
            return ApiResponse::create(
                422, __('validation.new.error', ['attribute' => 'login']),
                null, $error->errors()
            );
        }

        // validate if email is already registered
        $user = User::where('email', $credentials['email'])->first();
        if ($user) {
            sleep(1);
            return ApiResponse::create(
                400, __('validation.new.error', ['attribute' => 'register']),
                null, ['email' => [__('validation.unique', ['attribute' => 'email'])]]);
        }

        // create user
        try {
            $user = User::create([
                'email' => $credentials['email'],
                'name' => $credentials['name'],
                'password' => Hash::make($credentials['password']),
                'is_admin' => false,
                'email_verified_at' => null,
                'profile_pic' => null,
            ]);
        } catch (\Exception $e) {
            sleep(1);
            return ApiResponse::create(
                500, __('validation.new.error', ['attribute' => 'register']));
        }

        // auto login
        try {
            Auth::login($user);
        } catch (\Exception $e) {
            sleep(1);
            return ApiResponse::success(__('base.success', ['action' => 'register']));
        }

        return ApiResponse::success(__('auth.success', ['action' => 'Register']));
    }
}
