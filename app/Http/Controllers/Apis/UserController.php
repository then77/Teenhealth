<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use App\Models\Objects\ApiResponse;
use App\Services\ThService;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    // Get user data
    public function index(Request $request)
    {
        return ApiResponse::success(
            __('base.success_retrieve', ['object' => 'user']),
            ThService::userData()
        );
    }

    // Update user data using store
    public function store(Request $request)
    {
        try {
            // Detect if "name" in request
            if ($request->has('name')) {
                $request->validate([
                    'name' => ['required', 'string', 'min:3', 'max:255']
                ]);
            }

            // Detect if "email" in request
            if ($request->has('email')) {
                $request->validate([
                    'email' => ['required', 'string', 'email', 'max:255']
                ]);
            }

            // Detect if "oldPassword" or "newPassword" in request
            if ($request->has('oldPassword') || $request->has('newPassword')) {
                $request->validate([
                    'oldPassword' => ['required', 'string'],
                    'newPassword' => [
                        'required', 'string',
                        Rules\Password::min(8)
                            ->letters()
                            ->mixedCase()
                            ->numbers()
                    ]
                ]);
            }

            // Detect if "profilePicture" in request
            if ($request->hasFile('profilePicture')) {
                Validator::validate($request->all(), [
                    'profilePicture' => [
                        'required',
                        Rules\File::image()
                            ->max('5mb')
                            ->dimensions(
                                Rule::dimensions()->maxWidth(4000)
                                    ->maxHeight(4000)
                            )
                    ]
                ]);
            }
        } catch (ValidationException $error) {
            return ApiResponse::error(
                422, __('validation.new.error', ['attribute' => 'user']),
                $error->errors()
            );
        }

        // Get all request data
        $data = $request->only(['name', 'email', 'oldPassword', 'newPassword', 'profilePicture']);

        // If "oldPassword" and "newPassword" in request,
        // check if "oldPassword" is correct
        if (isset($data['oldPassword']) && isset($data['newPassword'])) {
            $user = $request->user();
            if (!Hash::check($data['oldPassword'], $user->password)) {
                return ApiResponse::error(
                    401, __('auth.password')
                );
            }

            $data['password'] = Hash::make($data['newPassword']);
            unset($data['oldPassword']);
            unset($data['newPassword']);
        }

        // If "profilePicture" in request, upload the image
        if (isset($data['profilePicture'])) {
            $data['profile_pic'] = asset(
                'storage/' . $data['profilePicture']
                    ->store('avatars', 'public'));
            unset($data['profilePicture']);
        }

        // Update user data
        $user = $request->user();
        $user->update([
            'name' => $data['name'] ?? $user->name,
            'email' => $data['email'] ?? $user->email,
            'password' => $data['password'] ?? $user->password,
            'profile_pic' => asset($data['profile_pic']) ?? $user->profile_pic,
        ]);

        return ApiResponse::success(
            __('base.success_update', ['object' => 'user']),
            ThService::userData()
        );
    }
}
