<?php

namespace App\Services;

use App\Models\User;
use App\Models\UserCourse;
use Illuminate\Support\Facades\Auth;

class ThService
{
    /**
     * Load user data for the store
     *
     * @return array|null
     */
    public static function loadStore(): ?string
    {

        $final = [
            'user' => self::partialUserData()
        ];
        return base64_encode(json_encode($final));
    }

    public static function partialUserData(): ?array
    {
        $user = Auth::user();

        if (!$user) {
            return null;
        }

        $data = [
            'name' => $user->name,
            'email' => $user->email,
            'profile_pic' => $user->profile_pic,
        ];

        // Only add is_admin to array if true
        if ($user->isAdmin()) {
            $data['is_admin'] = true;
        }

        return $data;
    }

    public static function userData(): ?array
    {
        $user = Auth::user();

        if (!$user) {
            return null;
        }

        $data = [
            'name' => $user->name,
            'email' => $user->email,
            'profile_pic' => $user->profile_pic,
            'email_verified_at' => $user->email_verified_at,
            'created_at' => $user->created_at,
            'updated_at' => $user->updated_at
        ];

        // Only add is_admin to array if true
        if ($user->isAdmin()) {
            $data['is_admin'] = true;
        }

        return $data;
    }
}
