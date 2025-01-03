import React from 'react';
import Page from '@/components/page-component';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

import landing_page01 from "@/assets/illustrations/landing_page.png";
import ill_rightside from "@/assets/illustrations/Saly_18 3.png";
import ill_2 from "@/assets/illustrations/Saly_22 3.png";
import ill_3 from "@/assets/illustrations/Saly_22 6.png";
import ill_4 from "@/assets/illustrations/Saly_22 5.png";
import square_tile from "@/assets/illustrations/square.png";
import Footer from '@/components/footer';

export default function Home() {

    const randomTitle = [
        "Kamu Teenager? Tapi butuh arahan?",
        "Gali pengetahuanmu bersama TeenHealth sekarang!"
    ];

    return (
        <Page title="Home">
            <div className='bg-repeat' style={{ backgroundImage: `url(${square_tile})`, backgroundSize: `24px` }}>
                <div className='h-screen w-full bg-primary-image px-view-h-padding py-nm flex flex-col justify-center items-center'>
                    <div className='h-full w-full flex gap-4'>
                        <div className='h-full w-full justify-center flex flex-col'>
                            <img src={landing_page01}></img>
                        </div>
                        <div className='h-full w-full justify-center flex flex-col gap-4'>
                            <h1 className='text-white text-5xl font-bold'>
                                {randomTitle[Math.floor(Math.random() * 2)]}
                            </h1>
                            <p className='text-white text-lg text-opacity-70 font-normal'>Yuk ketahui apa saja yang kita alami saat remaja dan persiapkan diri kita
                                untuk masa depan yang kita impikan! </p>
                            <div>
                                <Button className="w-auto" variant="light">
                                    Mulai
                                    <ArrowRight />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[640px] w-full px-view-h-padding py-nm flex justify-center items-center bg-gradient-to-r from-[#5daee510] from-10% via-[#82c5f200] via-50% to-[#ff686810] to-90%'>
                    <div className='w-full h-min flex'>
                        <div className='h-min w-full justify-center py-[30px]'>
                            <img src={ill_rightside} className='absolute size-80 rotate-[-75deg] blur-sm -left-28 -mt-44'></img>
                            <img src={ill_2} className='absolute size-48 rotate-[-40deg] -ml-40 mt-44'></img>
                            <img src={ill_3} className='absolute size-24 rotate-[54deg] -ml-[-480px]'></img>
                            <img src={ill_4} className='absolute size-64 rotate-[-15deg] -ml-[-340px] -mt-[-230px]'></img>
                            <div className='w-full h-full backdrop-blur-md bg-white/30 border-2 border-black/10 rounded-lg px-[30px] py-[30px] flex flex-col gap-4'>
                                <h1 className='text-primary-color text-5xl font-bold'>Selamat datang di TeenHealth!</h1>
                                <p className='text-black text-lg text-opacity-70 font-normal'>Nah, di sinilah TeenHealth hadir buat nemenin kamu!
                                TeenHealth adalah platform yang didesain khusus untuk kamu, remaja keren yang lagi mencari jawaban atas berbagai pertanyaan seputar kesehatan, pergaulan, mental, dan kehidupan. Kita percaya kalau jadi remaja itu nggak cuma soal tumbuh,tapi juga soal berkembang jadi versi terbaik dari dirimu. </p>
                            </div>
                        </div>
                        <div className='h-full w-full justify-center'>

                        </div>
                    </div>
                </div>
                <div className='h-[640px] w-full px-view-h-padding py-nm flex justify-center items-center border-t-[4px] bg-gradient-to-r from-[#F8DA4320] from-10% via-[#82c5f200] via-50% to-[#7CF49B20] to-90%'>
                    <div className='w-full h-min flex'>
                        <div className='h-full w-full justify-center'>
                        </div>
                        <div className='h-min w-full justify-center py-[30px]'>
                            <img src={ill_2} className='absolute size-48 rotate-[-40deg] -ml-40 mt-44'></img>
                            <img src={ill_3} className='absolute size-24 rotate-[54deg] -ml-[-480px]'></img>
                            <img src={ill_4} className='absolute size-64 rotate-[-15deg] -ml-[-340px] -mt-[-230px]'></img>
                            <div className='w-full h-full backdrop-blur-md bg-white/30 border-2 border-black/10 rounded-lg px-[30px] py-[30px] flex flex-col gap-4'>
                                <h1 className='text-primary-color text-5xl font-bold'>Visi</h1>
                                <p className='text-black text-lg text-opacity-70 font-normal'>Menjadi platform edukasi terpercaya yang mendukung kesehatan fisik, mental, dan sosial remaja untuk membentuk generasi yang tangguh, cerdas, dan peduli.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[640px] w-full px-view-h-padding py-nm flex justify-center items-center bg-gradient-to-r from-[#5daee510] from-10% via-[#82c5f200] via-50% to-[#ff686810] to-90%'>
                    <div className='w-full h-min flex'>
                        <div className='h-min w-full justify-center py-[30px]'>
                            <img src={ill_2} className='absolute size-48 rotate-[-40deg] -ml-40 mt-44'></img>
                            <img src={ill_3} className='absolute size-24 rotate-[54deg] -ml-[-480px]'></img>
                            <img src={ill_4} className='absolute size-64 rotate-[-15deg] -ml-[-340px] -mt-[-230px]'></img>
                            <div className='w-full h-full backdrop-blur-md bg-white/30 border-2 border-black/10 rounded-lg px-[30px] py-[30px] flex flex-col gap-4'>
                                <h1 className='text-primary-color text-5xl font-bold'>Misi</h1>
                                <ul className='text-black text-lg text-opacity-70 font-normal list-decimal list-inside'> {/* Urutan misi */}
                                    <li>Memberikan informasi yang akurat, mudah dipahami, dan relevan bagi remaja.</li>
                                    <li>Menciptakan ruang diskusi yang aman dan nyaman untuk berbagi pengalaman dan pendapat.</li>
                                    <li>Mendorong kesadaran remaja terhadap pentingnya menjaga kesehatan dan membangun relasi yang positif.</li>
                                    <li>Menyediakan aktivitas interaktif seperti kuis, cerita inspiratif, dan tantangan praktis untuk mendukung pembelajaran.</li>
                                    <li>Bekerja sama dengan pakar dan komunitas untuk meningkatkan kualitas konten serta jangkauan edukasi.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='h-full w-full justify-center'>

                        </div>
                    </div>
                </div>
                <div className='h-[640px] w-full px-view-h-padding py-nm flex justify-center items-center border-t-[4px]'>
                    <div className='h-min w-full justify-center py-[30px]'>
                        <div className='w-full h-full backdrop-blur-md items-center bg-white/30 border-2 border-black/10 rounded-lg px-[30px] py-[30px] flex flex-col gap-4'>
                            <h1 className='text-primary-color text-5xl font-bold'>Yuk, eksplor lebih jauh</h1>
                            <p className='text-black text-lg text-opacity-70 font-normal'>Dengan mengikuti materi dan quiz dari Teenhealth. kamu bisa mengenali lebih jauh apa yang terjadi dan disiapkan saat masa remaja.</p>
                            <div>
                                <Button className="w-auto" variant="light">
                                    Mulai
                                    <ArrowRight />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Page>
    );
}
