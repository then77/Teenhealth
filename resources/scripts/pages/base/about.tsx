import React from 'react';
import Page from '@/components/page-component';

import { Icon } from "@iconify/react";
import flag_icon from "@/assets/icons/Vector.svg"
import gear_icon from "@/assets/icons/Vector-1.svg"
import brush_icon from "@/assets/icons/Vector-2.svg"
import globe_icon from "@/assets/icons/Vector-3.svg"
import light_bulb_icon from "@/assets/icons/Vector-4.svg"
import square_tile from "@/assets/illustrations/square.png";
import Footer from '@/components/footer';

export default function About() {
    return (
        <Page title="Learn">
            <div className='bg-repeat bg-[#F2F2F2]' style={{ backgroundImage: `url(${square_tile})`, backgroundSize: `24px` }}>
                <div className='w-full h-min px-view-h-padding py-nm flex flex-col justify-center gap-[30px]'>
                    <div className='w-full h-min flex flex-col gap-16'>
                        <div className='w-full h-[340px] flex gap-[30px]'>
                            <div className='w-full h-full flex flex-col justify-center gap-[20px]'>
                                <div className='w-full h-12 flex gap-[15px]'>
                                    <div className='group overflow-clip bg-[#40A69F] hover:bg-[#42c8bf] transition-all ease-in-out duration-500  h-full max-w-12 hover:max-w-72 px-4 py-2 gap-3 rounded-full flex items-center'>
                                        <img src={flag_icon} className='size-4'></img>
                                        <p className='font-medium min-w-max text-white duration-500 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out'>Team Lead</p>
                                    </div>
                                    <div className='group overflow-clip bg-[#D52B2B] hover:bg-[#f24545] transition-all ease-in-out duration-500  h-full max-w-12 hover:max-w-72 px-4 py-2 gap-3 rounded-full flex items-center'>
                                        <img src={gear_icon} className='size-4'></img>
                                        <p className='font-medium min-w-max text-white duration-500 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out'>Back-end Engineer</p>
                                    </div>
                                    <div className='group overflow-clip bg-[#d328f1] hover:bg-[#cc80e4] transition-all ease-in-out duration-500  h-full max-w-12 hover:max-w-72 px-4 py-2 gap-3 rounded-full flex items-center'>
                                        <img src={brush_icon} className='size-4'></img>
                                        <p className='font-medium min-w-max text-white duration-500 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out'>UI/UX Designer</p>
                                    </div>
                                    <div className='group overflow-clip bg-[#F6AC34] hover:bg-[#f1b453] transition-all ease-in-out duration-500  h-full max-w-12 hover:max-w-72 px-4 py-2 gap-3 rounded-full flex items-center'>
                                        <img src={globe_icon} className='size-4'></img>
                                        <p className='font-medium min-w-max text-white duration-500 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out'>Front-end Specialist</p>
                                    </div>
                                </div>
                                <h1 className='text-primary-color text-5xl font-bold'>Nevan Pratama H.</h1>
                                <p className='text-black text-lg text-opacity-70 font-normal'>
                                    Salam kenal! Saya disini sebagai lead tim Impact. Saya disini juga sebagai web developer Teenhealth, dan berkomitmen untuk memastikan Teenhealth dapat memberikan dampak terbaik, terutama untuk para remaja di Indonesia. 
                                </p>
                            </div>
                            <div className='w-[420px] h-full border border-black/10'>
                                <div className='w-full h-full border-white/50 border-[12px] rounded-lg shadow-lg flex flex-col items-center justify-end'>
                                    <div className='bg-white/5 backdrop-blur-md border border-black/10 h-16 rounded-lg shadow-lg absolute flex -mb-9 px-2 py-2 gap-2'>
                                        <a href='https://github.com/then77'>
                                            <div className='transition-colors ease-in-out duration-300 w-12 h-12 bg-white/10 border border-black/5 hover:border-black/20 rounded-lg hover:bg-white/40 flex items-center justify-center'>
                                                <Icon icon="mdi:github" className='size-7' />
                                            </div>
                                        </a>
                                        <a href='https://realzzy.my.id/about'>
                                            <div className='transition-colors ease-in-out duration-300 w-12 h-12 bg-white/10 border border-black/5 hover:border-black/20 rounded-lg hover:bg-white/40 flex items-center justify-center'>
                                                <Icon icon="lucide:globe" className='size-7' />
                                            </div>
                                        </a>
                                        <a href='https://www.linkedin.com/in/nevan-pratama/'>
                                            <div className='transition-colors ease-in-out duration-300 w-12 h-12 bg-white/10 border border-black/5 hover:border-black/20 rounded-lg hover:bg-white/40 flex items-center justify-center'>
                                                <Icon icon="mdi:linkedin" className='size-7' />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[340px] flex gap-[30px]'>
                            <div className='w-full h-full flex flex-col justify-center gap-[20px]'>
                                <div className='w-full h-12 flex gap-[15px]'>
                                    <div className='group overflow-clip bg-[#d328f1] hover:bg-[#cc80e4] transition-all ease-in-out duration-500  h-full max-w-12 hover:max-w-72 px-4 py-2 gap-3 rounded-full flex items-center'>
                                        <img src={brush_icon} className='size-4'></img>
                                        <p className='font-medium min-w-max text-white duration-500 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out'>UI/UX Designer</p>
                                    </div>
                                    <div className='group overflow-clip bg-[#F6AC34] hover:bg-[#f1b453] transition-all ease-in-out duration-500  h-full max-w-12 hover:max-w-72 px-4 py-2 gap-3 rounded-full flex items-center'>
                                        <img src={globe_icon} className='size-4'></img>
                                        <p className='font-medium min-w-max text-white duration-500 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out'>Front-end Specialist</p>
                                    </div>
                                </div>
                                <h1 className='text-primary-color text-5xl font-bold'>Adlialfakhri Ziyadatullah</h1>
                                <p className='text-black text-lg text-opacity-70 font-normal'>
                                    Hai, aku Adli. Saya sebagai bagian desainer sekaligus front-end disini. Saya memastikan desain Teenhealth tetap menarik dan juga user friendly agar user kedepan nya lebih tertarik dengan platform Teenhealth.
                                </p>
                            </div>
                            <div className='w-[420px] h-full border border-black/10'>
                                <div className='w-full h-full border-white/50 border-[12px] rounded-lg shadow-lg flex flex-col items-center justify-end'>
                                    <div className='bg-white/5 backdrop-blur-md border border-black/10 h-16 rounded-lg shadow-lg absolute flex -mb-9 px-2 py-2 gap-2'>
                                        <a href='https://github.com/ahmadkasim12'>
                                            <div className='transition-colors ease-in-out duration-300 w-12 h-12 bg-white/10 border border-black/5 hover:border-black/20 rounded-lg hover:bg-white/40 flex items-center justify-center'>
                                                <Icon icon="mdi:github" className='size-7' />
                                            </div>
                                        </a>
                                        <a href='https://osu.ppy.sh/users/36419488'>
                                            <div className='transition-colors ease-in-out duration-300 w-12 h-12 bg-white/10 border border-black/5 hover:border-black/20 rounded-lg hover:bg-white/40 flex items-center justify-center'>
                                                <Icon icon="simple-icons:osu" className='size-7' />
                                            </div>
                                        </a>
                                        <a href='https://www.linkedin.com/in/adlialfakhri-ziyadatullah-299a2a30a/'>
                                            <div className='transition-colors ease-in-out duration-300 w-12 h-12 bg-white/10 border border-black/5 hover:border-black/20 rounded-lg hover:bg-white/40 flex items-center justify-center'>
                                                <Icon icon="mdi:linkedin" className='size-7' />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[340px] flex gap-[30px]'>
                            <div className='w-full h-full flex flex-col justify-center gap-[20px]'>
                                <div className='w-full h-12 flex gap-[15px]'>
                                    <div className='group overflow-clip bg-[#2B9BEB] hover:bg-[#5bb4f3] transition-all ease-in-out duration-500  h-full max-w-12 hover:max-w-72 px-4 py-2 gap-3 rounded-full flex items-center'>
                                        <img src={light_bulb_icon} className='size-5'></img>
                                        <p className='font-medium min-w-max text-white duration-500 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out'>Front-end Specialist</p>
                                    </div>
                                    <div className='group overflow-clip bg-[#d328f1] hover:bg-[#cc80e4] transition-all ease-in-out duration-500  h-full max-w-12 hover:max-w-72 px-4 py-2 gap-3 rounded-full flex items-center'>
                                        <img src={brush_icon} className='size-4'></img>
                                        <p className='font-medium min-w-max text-white duration-500 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out'>UI/UX Designer</p>
                                    </div>
                                </div>
                                <h1 className='text-primary-color text-5xl font-bold'>Narayana Cokro K.A.</h1>
                                <p className='text-black text-lg text-opacity-70 font-normal'>
                                Hi all! Aku Narayana Cokro, teman-teman biasanya manggil aku Naran.sekarang aku sedang bersekolah di SMK Raden Umar Said Kudus dari jurusan PPLG. Aku memiliki passion di dunia web development dan edukasi!
                                </p>
                            </div>
                            <div className='w-[420px] h-full border border-black/10'>
                                <div className='w-full h-full border-white/50 border-[12px] rounded-lg shadow-lg flex flex-col items-center justify-end'>
                                    <div className='bg-white/5 backdrop-blur-md border border-black/10 h-16 rounded-lg shadow-lg absolute flex -mb-9 px-2 py-2 gap-2'>
                                        <div className='transition-colors ease-in-out duration-300 w-12 h-12 bg-white/10 border border-black/5 hover:border-black/20 rounded-lg hover:bg-white/40 flex items-center justify-center'>
                                            <Icon icon="mdi:github" className='size-7' />
                                        </div>
                                        <a href='https://www.instagram.com/nckams/'>
                                            <div className='transition-colors ease-in-out duration-300 w-12 h-12 bg-white/10 border border-black/5 hover:border-black/20 rounded-lg hover:bg-white/40 flex items-center justify-center'>
                                                <Icon icon="mdi:instagram" className='size-7' />
                                            </div>
                                        </a>
                                        <a href='https://www.linkedin.com/in/narayana-cokro-b053552a1/edit/forms/next-action/after-connect-update-profile/'>
                                            <div className='transition-colors ease-in-out duration-300 w-12 h-12 bg-white/10 border border-black/5 hover:border-black/20 rounded-lg hover:bg-white/40 flex items-center justify-center'>
                                                <Icon icon="mdi:linkedin" className='size-7' />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </Page>
    );
}
