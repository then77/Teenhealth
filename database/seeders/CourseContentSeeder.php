<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\CourseContent;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;

class CourseContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $future_planning = [
            [
                'title' => 'Latar Belakang',
                'json_content' => [
                    '1. “Masa depan” mungkin kedengarannya jauh banget, kayak film fiksi ilmiah. Tapi faktanya, masa depan kita dimulai dari keputusan-keputusan kecil yang kita ambil hari ini. Buat remaja, ngerencanain masa depan bukan berarti harus tahu segalanya sekarang juga. Tapi lebih ke soal ngebangun kebiasaan dan tujuan yang bisa bantu kita jadi versi terbaik dari diri kita.',
                    '2. Kenapa penting? Karena hidup tanpa rencana itu ibarat jalan tanpa peta. Kita bisa aja nyasar ke tempat yang nggak kita mau, dan itu nggak asik banget.'
                ]
            ],
            [
                'title' => 'Bab 1: Survei',
                'json_content' => [
                    '### Hasil Survei yang Bikin Kamu Mikir',
                    '1. **National Career Development Association:** Remaja yang tahu minat dan bakatnya bakal lebih pede waktu milih jalur karier.',
                    '2. **Pew Research Center:** 74% remaja merasa lebih semangat sama masa depan kalau udah tahu potensi diri mereka.',
                    '3. **Harvard Business Review:** Orang yang nulis tujuan hidup punya peluang 42% lebih besar buat ngecapainya.',
                    '4. **American Psychological Association:** 50% remaja sering stres gara-gara nggak bisa ngatur waktu.',
                    '5. **WHO:** 1 dari 7 remaja ngalamin masalah kesehatan mental.',
                    '6. **MIT:** Kolaborasi bareng temen bisa ningkatin kreativitas sampe 40%.',
                    'Survei ini nunjukin kalau ngerti diri sendiri, punya tujuan yang jelas, dan kebiasaan yang asik bisa bantu kamu buat siapin masa depan yang lebih seru.'
                ]
            ],
            [
                'title' => 'Bab 2: Kenali Diri Sendiri',
                'json_content' => [
                    '### Tips agar kamu lebih mengenal diri sendiri',
                    '1. **Jurnal Minat dan Bakat:**
   - Coba luangin 10 menit tiap hari buat nyatet hal yang bikin kamu happy.
   - Catet juga hal-hal yang bikin nggak nyaman supaya tau apa aja yang sebaiknya dihindari.',
                    '2. Kuisioner: nah, seperti ikut quiz di platform ini, kamu jadi tau seberapa besar kamu mengenali dirimu dan masa depan dengan Teenhealth.',
                    '3. **Inspirasi dari Orang Lain:**
   - List orang yang kamu kagumi dan apa aja yang bisa dipelajari dari mereka.'
                ]
            ],
            [
                'title' => 'Bab 3: Tentuin Tujuan dan Bangun Kebiasaan Positif',
                'json_content' => [
                    '### Tips buat nentuin tujuanmu',
                    '1. **Daftar Impian:**
   - Tulis semua hal yang pengen kamu capai, mulai dari yang kecil sampe yang besar.',
                    '2. **Pisahin Tujuan:**
   - Jangka pendek (1-6 bulan): Contoh, ikut lomba menulis.
   - Jangka panjang (1-5 tahun): Contoh, masuk universitas impian.',
                    '3. **Manajemen Waktu:**
   - Pakai matriks Eisenhower buat tau mana yang penting duluan.
   - Gunain aplikasi kayak Notion buat atur jadwal harian.',
                    '4. **Bangun Kebiasaan Positif:**
   - Mulai dari yang kecil, kayak baca 5 halaman buku tiap hari.
   - Gabungin kebiasaan baru sama rutinitas lama (habit stacking).'
                ]
            ],
            [
                'title' => 'Bab 4: Tugas Praktek',
                'json_content' => [
                    '1. Bikin "Life Map" kamu sendiri yang mencakup:
   - Minat dan bakat kamu.
   - Tujuan jangka pendek dan panjang.
   - Jadwal mingguan buat langkah-langkah kecil.
   - Ide kolaborasi bareng temen atau mentor.
   - Rencana buat menjaga kesehatan mental.',
                    '2. Pakai kertas besar atau aplikasi mind-mapping.',
                    '3. Presentasiin ke temen atau keluarga buat dapet feedback.'
                ]
            ]
        ];

        $puberty = [
            [
                'title' => 'Latar Belakang',
                'json_content' => [
                    'Pubertas adalah masa peralihan dari anak-anak menuju dewasa, dan itu bisa jadi nggak selalu mudah buat dilalui. Tubuh kita berubah, perasaan kita jadi lebih rumit, dan kadang kita merasa bingung dengan semuanya. Nah, di sini kita bakal bahas hal-hal seputar pubertas dan kesehatan remaja supaya kalian nggak merasa sendirian dan bisa lebih siap menghadapi perubahan itu.'
                ]
            ],
            [
                'title' => 'Bab 1: Fakta Seputar Pubertas',
                'json_content' => [
                    'Banyak remaja nggak tahu apa yang terjadi di tubuh mereka saat pubertas. Misalnya, banyak yang kaget ketika pertama kali menstruasi atau suara jadi berubah. Tapi jangan khawatir, itu semua normal!'
                ]
            ],
            [
                'title' => 'Bab 2: Apa Itu Pubertas?',
                'json_content' => [
                    'Pubertas adalah masa dimana tubuh kita berkembang dan mengalami perubahan besar. Ini termasuk perubahan fisik (kayak tumbuh tinggi, muncul jerawat, atau dada mulai berkembang) dan perubahan emosional (kayak mood swing yang kadang bikin bingung). Pubertas dimulai berbeda-beda bagi tiap orang, tapi biasanya terjadi antara usia 8-14 tahun.',
                    'Beberapa perubahan yang terjadi selama pubertas:
  - **Bagi perempuan**: Payudara mulai berkembang, menstruasi pertama, dan rambut kemaluan tumbuh.
  - **Bagi laki laki**: Suara mulai berat, tumbuh jakun, dan rambut wajah mulai tumbuh.
  - Emosi jadi naik turun dan kadang bingung.'
                ]
            ],
            [
                'title' => 'Bab 3: Edukasi Seksual yang Perlu Diketahui Remaja',
                'json_content' => [
                    '### Kenapa Edukasi Seksual Itu Penting?',
                    'Penting banget supaya kita bisa memahami tubuh kita sendiri dan tahu apa yang terjadi dalam hubungan. Edukasi seksual membantu kita agar nggak gampang terjebak dalam mitos atau informasi yang salah tentang seks.',
                    'Beberapa hal penting yang perlu kalian tahu:
  - **Bahaya Seks bebas**: Ini tentang cara melindungi diri dari penyakit menular seksual (HIV/AIDS) dan kehamilan yang nggak direncanakan.
  - **Persetujuan dalam hubungan**: Dalam hubungan apapun, sangat penting untuk saling menghormati dan memahami batasan satu sama lain.
  - **Perubahan dalam hubungan**: Ketika kita mulai merasa tertarik sama orang lain, kadang bisa bingung bagaimana harus bersikap.'
                ]
            ],
            [
                'title' => 'Bab 4: Tugas Praktek',
                'json_content' => [
                    '1. Menulis Perasaan',
                    'Tuliskan perasaanmu tentang perubahan yang kamu alami selama pubertas. Apa yang membuatmu bingung atau khawatir? Setelah itu, coba diskusikan dengan teman atau orang yang kamu percayai. Ini bakal membantu kamu merasa lebih lega dan memahami diri sendiri lebih baik.',
                ]
            ]
        ];

        $relationship = [
            [
                'title' => 'Latar Belakang',
                'json_content' => [
                    'Pergaulan remaja adalah salah satu bagian paling penting dalam hidup kalian. Bersama teman-teman, kita belajar banyak hal tentang diri sendiri, bagaimana berinteraksi, dan menghadapi masalah. Namun, terkadang ada masalah yang muncul dalam berteman, entah itu karena perasaan tersinggung, salah paham, atau pertemanan yang toxic. Yuk, kita pelajari cara menghadapinya supaya bisa punya relasi yang sehat dan positif.'
                ]
            ],
            [
                'title' => 'Bab 1: Fakta Seputar Pergaulan Remaja (Berdasarkan Survei/Kisah Nyata)',
                'json_content' => [
                    '1. **Fakta**: Remaja sering merasa bingung dalam memilih teman yang benar-benar mendukung mereka. Banyak yang lebih memilih teman hanya karena pengaruh sosial, bukan karena kesamaan nilai atau perasaan.',
                    '2. **Kisah Nyata (Berdasarkan wawancara)**: "Dulu aku ikut-ikutan teman yang suka ngejek orang lain, tapi lama-lama aku ngerasa nggak enak dan akhirnya berhenti berteman dengan mereka. Sekarang aku lebih selektif dan pilih teman yang bisa saling mendukung,"'
                ]
            ],
            [
                'title' => 'Bab 2: Membangun Relasi yang Sehat dalam Pertemanan',
                'json_content' => [
                    '###Kenapa Relasi Pertemanan Itu Penting?',
                    'Punya teman itu bikin hidup lebih menyenangkan, tapi untuk punya pertemanan yang sehat, kamu harus belajar komunikasi, menghargai perasaan teman, dan juga tahu batasan.',
                    '### Tips Membangun Pertemanan Sehat:',
                    '  - **Komunikasi Terbuka**: Jangan takut buat ngomong kalau ada yang mengganggu atau bikin kamu nggak nyaman. Teman yang baik bakal mendengarkan dan memahami.
  - **Respect (Menghargai)**: Selalu hargai perasaan teman, jangan gampang menilai atau ngejudge. Cobalah untuk mendukung satu sama lain.
  - **Menjaga Privasi**: Dalam pertemanan, jaga privasi dan kepercayaan teman. Kalau mereka cerita sesuatu yang pribadi, simpan itu dengan baik.'
                ]
            ],
            [
                'title' => 'Bab 3: Menghadapi Masalah dalam Pertemanan',
                'json_content' => [
                    'Masalah dalam pertemanan itu biasa, apalagi kalau udah saling dekat. Tapi yang penting adalah cara kita menghadapinya. Jangan biarkan masalah kecil jadi besar.',
                    '### Masalah yang sering muncul dan cara menghadapi nya:',
                    '- **Kesalahpahaman**: Kalau ada masalah, langsung aja obrolin, jangan didiemin. Komunikasi itu kunci!
- **Teman Toxic**: Teman yang nggak pernah mendukung atau malah bikin kamu merasa nggak cukup baik itu bisa jadi toxic. Kalau udah kayak gini, pertimbangkan untuk menjauh.
- **Perasaan Terabaikan**: Kadang, kita ngerasa ditinggalin teman-teman. Coba bicara sama mereka dan cek apakah ada hal yang nggak kamu ketahui.'
                ]
            ],
            [
                'title' => 'Bab 4: Tugas Praktik - Meningkatkan Keterampilan Sosialisasi',
                'json_content' => [
                    '### Tugas 1: Evaluasi Relasi Pertemanan',
                    'Coba pikirin teman-teman yang ada di sekitarmu. Mana yang bisa bikin kamu merasa lebih baik dan mana yang bikin kamu merasa nggak nyaman? Coba tulis refleksi tentang pertemananmu sekarang.',
                    '### Tugas 2: Mulai Percakapan dengan Teman Baru',
                    'Cobalah untuk ngobrol sama teman baru di sekolah atau komunitas. Gali minat yang sama dan mulai percakapan ringan. Ini bisa jadi latihan untuk mengembangkan keterampilan sosial.',
                    '### Tugas 3: Menyelesaikan Konflik dengan Teman',
                    'Jika ada konflik atau masalah, coba selesaikan dengan cara yang dewasa. Bicarakan perasaanmu dengan teman, dengarkan pendapat mereka, dan coba cari solusi bersama.',
                    '### Tugas 4: Menjadi Pendengar yang Baik',
                    'Ajak temanmu untuk cerita tentang hari mereka, masalah yang mereka hadapi, atau sekadar berbagi perasaan. Fokuskan perhatian penuh tanpa menginterupsi. Ini bisa mempererat hubungan dan memperdalam pertemanan.'
                ]
            ]
        ];

        // Run through each course content
        $all_contents = [
            101 => $future_planning,
            102 => $puberty,
            103 => $relationship
        ];

        $total_count = 1;
        foreach ($all_contents as $course_id => $contents) {
            $count = 1;
            foreach ($contents as $content) {
                CourseContent::updateOrCreate([
                    'id' => $total_count++,
                    'course_id' => $course_id,
                    'title' => $content['title'],
                    'order' => $count++,
                    'json_content' => $content['json_content']
                ]);
            }

            Log::info("Course $course_id contents seeded.");
        }
    }
}
