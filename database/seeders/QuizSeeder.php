<?php

namespace Database\Seeders;

use App\Models\Quiz;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $quizzes = [
            [
                'id' => '1001',
                'name' => 'Seberapa Siap Kamu untuk Masa Depan?',
                'description' => 'Yuk, cek seberapa siap kamu untuk masa depanmu dengan mengikuti quiz ini!',
                'result' => [
                    [
                        'min' => '0',
                        'max' => '15',
                        'title' => 'Pemula Masa Depan',
                        'description' => 'Ini baru awal! Mulailah dengan langkah-langkah kecil untuk mengenali diri dan mempersiapkan masa depan lebih baik.'
                    ],
                    [
                        'min' => '16',
                        'max' => '25',
                        'title' => 'Explorer Awal',
                        'description' => 'Kamu masih dalam proses menemukan diri sendiri. Jangan ragu untuk mencoba hal-hal baru dan pelajari lebih banyak tentang dirimu.',
                    ],
                    [
                        'min' => '26',
                        'max' => '33',
                        'title' => 'Petualang Masa Depan',
                        'description' => 'Kamu sedang membangun dasar-dasar masa depanmu. Dengan usaha lebih konsisten, kamu pasti bisa mencapai tujuanmu!'
                    ],
                    // 34 - 40
                    [
                        'min' => '34',
                        'max' => '40',
                        'title' => 'Pemimpin Masa Depan',
                        'description' => 'Kamu sudah siap untuk masa depan! Jangan ragu untuk terus belajar dan berkembang, karena kamu bisa mencapai apa pun yang kamu inginkan.'
                    ]
                ]
            ],
            [
                'id' => '1002',
                'name' => 'Seberapa Baik Remaja Membangun Hubungan Sosial?',
                'description' => 'Yuk, cek seberapa baik kamu dalam membangun hubungan sosial dengan quiz ini!',
                'result' => [
                    [
                        'min' => 0,
                        'max' => 15,
                        'title' => 'Individualis Sosial',
                        'description' => 'Kamu cenderung lebih nyaman menjaga jarak dalam hubungan sosial. Cobalah lebih sering berinteraksi untuk memperkaya pengalamanmu.'
                    ],
                    [
                        'min' => 16,
                        'max' => 25,
                        'title' => 'Mediator Sederhana',
                        'description' => 'Kamu cukup baik dalam menjalin hubungan, tetapi ada ruang untuk lebih meningkatkan keterampilan sosialmu.'
                    ],
                    [
                        'min' => 26,
                        'max' => 33,
                        'title' => 'Pendukung Setia',
                        'description' => 'Kamu selalu ada untuk teman-temanmu dan tahu cara menjaga hubungan baik. Tapi jangan lupa untuk tetap membuka diri pada hubungan baru.'
                    ],
                    [
                        'min' => 34,
                        'max' => 40,
                        'title' => 'Master Sosial',
                        'description' => 'Kamu sangat mahir menjaga hubungan sosial. Orang-orang di sekitarmu merasa nyaman dan dihargai.'
                    ]
                ]
            ],
            [
                'id' => '1003',
                'name' => 'Quiz Pubertas/Kesehatan Remaja',
                'description' => 'Yuk, cek seberapa paham kamu tentang pubertas dan kesehatan remaja dengan quiz ini!',
                'result' => [
                    [
                        'min' => 0,
                        'max' => 3,
                        'title' => 'Perlu Belajar Lebih Banyak',
                        'description' => 'Kesehatan fisik dan mental sangat penting, terus belajar agar bisa merawat tubuh dan pikiran dengan baik.'
                    ],
                    [
                        'min' => 4,
                        'max' => 6,
                        'title' => 'Sedang Belajar',
                        'description' => 'Kamu sudah mulai memahami hal-hal penting tentang pubertas dan kesehatan. Terus belajar agar lebih siap menghadapi perubahan.'
                    ],
                    [
                        'min' => 7,
                        'max' => 9,
                        'title' => 'Cukup Mengerti',
                        'description' => 'Bagus! Kamu sudah tahu banyak tentang pubertas dan cara menjaga kesehatan. Jangan ragu untuk berbagi pengetahuan ini dengan teman-teman.'
                    ],
                    [
                        'min' => 10,
                        'max' => 10,
                        'title' => 'Sangat Memahami',
                        'description' => 'Luar biasa! Kamu benar-benar mengerti tentang pubertas dan kesehatan remaja. Teruskan menjaga kesehatan tubuh dan pikiranmu!'
                    ]
                ]
            ]
        ];

        $count = 1;
        foreach ($quizzes as $quiz) {
            Quiz::updateOrCreate(
                [
                    'id' => $quiz['id'],
                    'enabled' => true,
                    'name' => $quiz['name'],
                    'description' => $quiz['description'],
                    'type' => 1,
                    'max_required_answer' => 10,
                    'randomize' => true,
                    'show_answer' => 1,
                    'result' => $quiz['result'],
                    'order' => $count++
                ]
            );

            Log::info('Quiz ' . $quiz['name'] . ' created with id ' . $quiz['id']);
        }
    }
}
