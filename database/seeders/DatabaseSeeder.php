<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

//        User::factory()->create([
//            'name' => 'Test User',
//            'email' => 'test@example.com',
//        ]);

        // Create test user
        User::create([
            'name' => 'Test User',
            'email' => 'test@gg.gg',
            'password' => Hash::make('UnknownLegally'),
        ]);

        $this->call(
            [
                CourseSeeder::class,
                CourseContentSeeder::class,
                QuizSeeder::class,
                QuestionSeeder::class
            ]
        );
    }
}
