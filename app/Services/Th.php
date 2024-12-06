<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;

class Th
{
    /**
     * Load user data for the store
     *
     * @return array|null
     */
    public static function loadStore(): ?string
    {
        $userData = self::partialUserData();

        $final = [
            'user' => $userData
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
        if ($user->is_admin) {
            $data['is_admin'] = true;
        }

        return $data;
    }
}
