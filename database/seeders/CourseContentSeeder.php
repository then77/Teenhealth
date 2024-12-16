<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\CourseContent;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CourseContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // If course content is not empty, skip
        if (CourseContent::count() > 0) {
            return;
        }

        // Make a list contains 1-10 in random order, unique
        // Ex: [2,6,4,9,5,...] until 8 length
        $order_list = range(1, 8);
        shuffle($order_list);

        // List all active course
        $courses = Course::where('enabled', true)->get();

        // If course is less than 8, run for loop from course[0] to course[max-count] and repeat until 8 in total
        while ($courses->count() < 8) {
            $new_course = Course::where('enabled', true)->get();
            // for each new course, add to courses
            foreach ($new_course as $course) {
                $courses->push($course);
            }
        }

        $courses_fakes = $courses->random(8)->toArray();

        // for course fake data
        for ($i = 0; $i < 8; $i++) {
            CourseContent::create([
                'course_id' => $courses_fakes[$i]['id'],
                'order' => $order_list[$i],
                'title' => 'This is a content title',
                'json_content' => json_encode([
                    'a' => 'text',
                    'b' => 'This is a course content'
                ])
            ]);
        }
    }
}
