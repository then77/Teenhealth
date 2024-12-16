<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $courses = [
            [
                'id' => '101',
                'name' => 'Future Planning',
                'description' => 'Nah, kalau kamu bingung tentang future planning mu, coba deh ikuti topic ini.',
                'theme_color' => 1,
                'banner_url' => '/assets/banners/future_planning.png'
            ],
            [
                'id' => '102',
                'name' => 'Puberty/Health',
                'description' => 'Kamu merasa ada hang berbeda ngga dari fisik kamu? Penasaran? Ayo ikuti materi ini, yang mengedukasi kamu tentang apa saja tentang pubertas.',
                'theme_color' => 2,
                'banner_url' => '/assets/banners/health.png'
            ],
            [
                'id' => '103',
                'name' => 'Relationship/Pergaulan',
                'description' => 'Disini kita akan belajar lebih banyak tentang "Gimana sih cara mengikuti pergaulan yang baik bagi remaja".',
                'theme_color' => 3,
                'banner_url' => '/assets/banners/relationship.png'
            ]
        ];

        $count = 1;
        foreach ($courses as $course) {
            Course::updateOrCreate(
                [
                    'id' => $course['id'],
                    'enabled' => true,
                    'name' => $course['name'],
                    'description' => $course['description'],
                    'theme_color' => $course['theme_color'],
                    'banner_url' => $course['banner_url'],
                    'order' => $count++
                ]
            );

            Log::info('Course ' . $course['name'] . ' created with id ' . $course['id']);
        }
    }
}
