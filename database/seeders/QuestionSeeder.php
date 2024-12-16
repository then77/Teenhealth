<?php

namespace Database\Seeders;

use App\Models\CourseContent;
use App\Models\Question;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $question_1 = [
            [
                'question' => [
                    'text' => 'Kalau kamu harus memilih karier, mana yang paling cocok buatmu?',
                    'image' => null
                ],
                'options' => [
                    'Karier yang bisa bermanfaat untuk banyak orang.',
                    'Karier yang sesuai dengan hobi atau passion.',
                    'Karier dengan penghasilan besar, walaupun nggak sesuai passion.',
                    'Karier yang paling mudah dicapai.'
                ],
                'answers' => [2, 4, 3, 1]
            ],
            [
                'question' => [
                    'text' => 'Apa yang biasanya kamu lakukan kalau punya tugas penting?',
                    'image' => null
                ],
                'options' => [
                    'Membuat rencana harian supaya selesai tepat waktu.',
                    'Langsung kerjakan sesuai deadline.',
                    'Kerjakan di menit-menit terakhir.',
                    'Kadang lupa sampai ditegur guru atau teman.'
                ],
                'answers' => [3, 4, 2, 1]
            ],
            [
                'question' => [
                    'text' => 'Menurutmu, seberapa penting punya mentor atau role model dalam hidup?',
                    'image' => null
                ],
                'options' => [
                    'Lumayan penting, tapi aku lebih suka belajar mandiri.',
                    'Sangat penting, mereka bisa kasih arahan yang jelas.',
                    'Kadang-kadang aja penting, tergantung situasinya.',
                    'Nggak penting, aku nggak butuh arahan.'
                ],
                'answers' => [3, 4, 2, 1]
            ],
            [
                'question' => [
                    'text' => 'Seberapa sering kamu menuliskan tujuan atau mimpi-mimpimu?',
                    'image' => null
                ],
                'options' => [
                    'Sering, aku punya daftar tujuan lengkap di jurnal.',
                    'Jarang, cuma kepikiran di kepala aja.',
                    'Kadang-kadang, kalau lagi ada waktu luang.',
                    'Belum pernah sama sekali.'
                ],
                'answers' => [4, 2, 3, 1]
            ],
            [
                'question' => [
                    'text' => 'Kalau ada perubahan mendadak di rencana kamu, apa reaksi pertama yang muncul?',
                    'image' => null
                ],
                'options' => [
                    'Panik dan nggak tahu harus ngapain.',
                    'Beradaptasi dan coba cari solusi baru.',
                    'Langsung menyerah dan nggak melanjutkan rencana.',
                    'Stres, tapi akhirnya tetap menyesuaikan diri.'
                ],
                'answers' => [2, 4, 1, 3]
            ],
            [
                'question' => [
                    'text' => 'Gimana caramu menghadapi kegagalan?',
                    'image' => null
                ],
                'options' => [
                    'Belajar dari kegagalan itu dan coba lagi.',
                    'Curhat ke teman untuk dapat dukungan.',
                    'Diam dan menunggu motivasi datang kembali.',
                    'Marah atau menyalahkan keadaan.'
                ],
                'answers' => [4, 3, 2, 1]
            ],
            [
                'question' => [
                    'text' => 'Seberapa yakin kamu dengan pilihan karier atau cita-cita saat ini?',
                    'image' => null
                ],
                'options' => [
                    'Lumayan yakin, tapi masih butuh waktu untuk memastikannya.',
                    'Sangat yakin, aku udah punya rencana jelas.',
                    'Sama sekali nggak yakin, aku bingung banget.',
                    'Masih ragu dan belum tahu apa yang benar-benar cocok.'
                ],
                'answers' => [3, 4, 1, 2]
            ],
            [
                'question' => [
                    'text' => 'Kalau bisa memilih superpower, kamu ingin punya kemampuan apa?',
                    'image' => null
                ],
                'options' => [
                    'Membaca pikiran orang lain.',
                    'Bisa teleportasi ke mana saja.',
                    'Mengendalikan waktu (rewind, pause, atau fast forward).',
                    'Membuat dirimu nggak pernah capek.'
                ],
                'answers' => [3, 2, 4, 3]
            ],
            [
                'question' => [
                    'text' => 'Kalau kamu bisa ngobrol sama diri sendiri di masa depan, apa yang bakal kamu tanyakan?',
                    'image' => null
                ],
                'options' => [
                    '"Apa aku berhasil mencapai cita-citaku?"',
                    '"Apa hal terbaik yang aku lakuin waktu remaja?"',
                    '"Aku punya hidup yang bahagia nggak?"',
                    '"Gimana caraku menghadapi kegagalan selama ini?"'
                ],
                'answers' => [3, 4, 2, 3]
            ],
            [
                'question' => [
                    'text' => 'Kalau kamu menang hadiah liburan gratis, kamu mau ke mana?',
                    'image' => null
                ],
                'options' => [
                    'Taman hiburan penuh wahana seru.',
                    'Pantai tropis yang santai.',
                    'Kota besar dengan banyak tempat belanja.',
                    'Pegunungan yang tenang dan segar.'
                ],
                'answers' => [4, 3, 2, 3]
            ]
        ];

        $question_2 = [
            [
                'question' => [
                    'text' => 'Apa yang menurutmu paling penting untuk membangun hubungan yang sehat?',
                    'image' => null
                ],
                'options' => [
                    'Kepercayaan antar individu.',
                    'Komunikasi yang jujur.',
                    'Kemampuan untuk memaafkan.',
                    'Kesamaan minat.'
                ],
                'answers' => [4, 3, 2, 1]
            ],
            [
                'question' => [
                    'text' => 'Bagaimana kamu merespons kritik dari teman dekat?',
                    'image' => null
                ],
                'options' => [
                    'Menerima dengan terbuka dan belajar darinya.',
                    'Mendengarkan, tetapi tetap mempertahankan pendapat sendiri.',
                    'Merasa sedikit tersinggung tapi tetap mencoba mendengar.',
                    'Langsung menghindar dari pembicaraan tersebut.'
                ],
                'answers' => [4, 3, 2, 1]
            ],
            [
                'question' => [
                    'text' => 'Apa yang biasanya kamu lakukan jika ada konflik dengan teman?',
                    'image' => null
                ],
                'options' => [
                    'Membicarakan masalah tersebut secara langsung.',
                    'Menunggu waktu yang tepat untuk mendiskusikannya.',
                    'Menghindari konflik sampai reda sendiri.',
                    'Memutuskan hubungan sementara waktu.'
                ],
                'answers' => [4, 3, 2, 1]
            ],
            [
                'question' => [
                    'text' => 'Seberapa sering kamu melibatkan teman atau keluarga dalam pengambilan keputusan penting?',
                    'image' => null
                ],
                'options' => [
                    'Selalu meminta saran mereka sebelum memutuskan.',
                    'Kadang-kadang, tergantung situasi.',
                    'Jarang, lebih suka memutuskan sendiri.',
                    'Tidak pernah, saya percaya sepenuhnya pada keputusan sendiri.'
                ],
                'answers' => [4, 3, 2, 1]
            ],
            [
                'question' => [
                    'text' => 'Apa yang biasanya kamu lakukan saat ada teman baru di lingkunganmu?',
                    'image' => null
                ],
                'options' => [
                    'Mengajak mereka bergabung dan mengenalkan ke orang lain.',
                    'Menunggu mereka mulai berinteraksi dulu.',
                    'Berinteraksi hanya jika mereka membutuhkan bantuan.',
                    'Berinisiatif berteman dengan mereka secara personal.'
                ],
                'answers' => [4, 2, 1, 3]
            ],
            [
                'question' => [
                    'text' => 'Bagaimana kamu menjaga hubungan dengan teman lama di tengah kesibukanmu?',
                    'image' => null
                ],
                'options' => [
                    'Menyempatkan waktu untuk bertemu atau ngobrol.',
                    'Mengirim pesan singkat untuk tetap terhubung.',
                    'Hanya menyapa saat bertemu di acara tertentu.',
                    'Fokus pada hubungan baru, jarang kontak teman lama.'
                ],
                'answers' => [4, 3, 2, 1]
            ],
            [
                'question' => [
                    'text' => 'Seberapa penting bagimu untuk memahami perasaan orang lain dalam hubungan sosial?',
                    'image' => null
                ],
                'options' => [
                    'Sangat penting, memahami perasaan orang lain adalah kunci hubungan.',
                    'Penting, tetapi tergantung situasi.',
                    'Tidak selalu penting, fokus pada komunikasi saja.',
                    'Tidak terlalu penting, lebih baik fokus pada tujuan hubungan.'
                ],
                'answers' => [4, 3, 2, 1]
            ],
            [
                'question' => [
                    'text' => 'Ketika temanmu tidak setuju dengan keputusanmu, apa yang kamu lakukan?',
                    'image' => null
                ],
                'options' => [
                    'Mendiskusikan pandangan mereka dan mencoba memahami.',
                    'Tetap dengan keputusan sendiri sambil menghormati pendapat mereka.',
                    'Mengabaikan ketidaksetujuan mereka.',
                    'Mengubah keputusan agar sesuai dengan pendapat mereka.'
                ],
                'answers' => [4, 3, 2, 1]
            ],
            [
                'question' => [
                    'text' => 'Bagaimana kamu mendukung teman yang menghadapi masalah?',
                    'image' => null
                ],
                'options' => [
                    'Mendengarkan masalah mereka dan memberikan bantuan nyata.',
                    'Memberikan motivasi atau nasihat sesuai situasi.',
                    'Menemani mereka agar merasa tidak sendirian.',
                    'Mengarahkan mereka untuk mencari bantuan profesional.'
                ],
                'answers' => [4, 3, 2, 1]
            ],
            [
                'question' => [
                    'text' => 'Apa strategi yang kamu gunakan untuk menjaga hubungan yang sehat dalam kelompok pertemanan?',
                    'image' => null
                ],
                'options' => [
                    'Menjaga komunikasi terbuka dan jujur.',
                    'Membuat batasan yang sehat untuk semua orang.',
                    'Menghindari konflik sebisa mungkin.',
                    'Memberikan perhatian hanya kepada teman terdekat.'
                ],
                'answers' => [4, 3, 2, 1]
            ]
        ];

        $question_3 = [
            [
                'question' => [
                    'text' => 'Pada usia berapa umumnya pubertas dimulai pada remaja perempuan?',
                    'image' => null
                ],
                'options' => [
                    '8-10 tahun',
                    '10-12 tahun',
                    '12-14 tahun',
                    '14-16 tahun'
                ],
                'answers' => [0, 1, 0, 0]
            ],
            [
                'question' => [
                    'text' => 'Apa yang pertama kali terjadi pada tubuh remaja perempuan saat pubertas?',
                    'image' => null
                ],
                'options' => [
                    'Meningkatnya tinggi badan',
                    'Perubahan suara',
                    'Pertumbuhan payudara',
                    'Menstruasi'
                ],
                'answers' => [0, 0, 1, 0]
            ],
            [
                'question' => [
                    'text' => 'Apa yang terjadi pada tubuh remaja laki-laki saat pubertas?',
                    'image' => null
                ],
                'options' => [
                    'Pertumbuhan payudara',
                    'Meningkatnya suara menjadi lebih berat',
                    'Perubahan bentuk tubuh menjadi lebih kurus',
                    'Menstruasi'
                ],
                'answers' => [0, 1, 0, 0]
            ],
            [
                'question' => [
                    'text' => 'Pada usia berapa seorang remaja laki-laki biasanya mengalami perubahan suara?',
                    'image' => null
                ],
                'options' => [
                    '8-10 tahun',
                    '10-12 tahun',
                    '12-14 tahun',
                    '14-16 tahun'
                ],
                'answers' => [0, 0, 1, 0]
            ],
            [
                'question' => [
                    'text' => 'Apa yang menyebabkan jerawat pada remaja?',
                    'image' => null
                ],
                'options' => [
                    'Kelebihan tidur',
                    'Perubahan hormon',
                    'Tidak mandi',
                    'Pola makan yang buruk'
                ],
                'answers' => [0, 1, 0, 0]
            ],
            [
                'question' => [
                    'text' => 'Kapan seorang remaja perempuan mulai mengalami menstruasi pertama (menarche)?',
                    'image' => null
                ],
                'options' => [
                    '7-9 tahun',
                    '9-11 tahun',
                    '11-13 tahun',
                    '13-15 tahun'
                ],
                'answers' => [0, 0, 1, 0]
            ],
            [
                'question' => [
                    'text' => 'Apakah penyebab utama stres pada remaja?',
                    'image' => null
                ],
                'options' => [
                    'Hubungan dengan teman sebaya',
                    'Masalah keluarga',
                    'Tugas sekolah yang banyak',
                    'Semua jawaban benar'
                ],
                'answers' => [0, 0, 0, 1]
            ],
            [
                'question' => [
                    'text' => 'Apa yang bisa dilakukan untuk menjaga kesehatan mental remaja?',
                    'image' => null
                ],
                'options' => [
                    'Tidur yang cukup',
                    'Berbicara dengan orang yang dipercaya',
                    'Olahraga teratur',
                    'Semua jawaban benar'
                ],
                'answers' => [0, 0, 0, 1]
            ],
            [
                'question' => [
                    'text' => 'Apa yang dimaksud dengan "batasan pribadi" dalam hubungan pertemanan atau percintaan?',
                    'image' => null
                ],
                'options' => [
                    'Menghindari kontak fisik',
                    'Menghormati perasaan dan ruang pribadi orang lain',
                    'Tidak berbicara tentang perasaan',
                    'Mengatakan "tidak" pada setiap permintaan'
                ],
                'answers' => [0, 1, 0, 0]
            ],
            [
                'question' => [
                    'text' => 'Apa yang sebaiknya dilakukan jika merasa cemas atau tertekan?',
                    'image' => null
                ],
                'options' => [
                    'Menyembunyikan perasaan',
                    'Menghadapi perasaan tersebut sendirian',
                    'Mengungkapkan perasaan pada teman atau konselor',
                    'Berdiam diri dan mengabaikan perasaan'
                ],
                'answers' => [0, 0, 1, 0]
            ]
        ];

        // Run through each questions
        $all_questions = [
            1001 => $question_1,
            1002 => $question_2,
            1003 => $question_3
        ];

        $total_count = 1;
        foreach ($all_questions as $question_id => $contents) {
            $count = 1;
            foreach ($contents as $content) {
                Question::updateOrCreate([
                    'id' => $total_count++,
                    'quiz_id' => $question_id,
                    'order' => $count++,
                    'question' => $content['question'],
                    'options' => $content['options'],
                    'answer' => $content['answers']
                ]);
            }

            Log::info("Course $question_id contents seeded.");
        }
    }
}
