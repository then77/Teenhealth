import React from 'react';
import Page from '@/components/page-component';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

import landing_page01 from "@/assets/illustrations/landing_Page.png";
import ill_rightside from "@/assets/illustrations/Saly_18 3.png";
import ill_2 from "@/assets/illustrations/Saly_22 3.png";
import ill_3 from "@/assets/illustrations/Saly_22 6.png";
import ill_4 from "@/assets/illustrations/Saly_22 5.png";
import square_tile from "@/assets/illustrations/square.png";
import { url } from 'inspector/promises';

export default function Home() {
    return (
        <Page title="Home">
            <div className='bg-repeat' style={{ backgroundImage: `url(${square_tile})`, backgroundSize: `24px` }}>
                <div className='h-[655px] w-full bg-primary-color px-view-h-padding py-nm flex justify-center items-center'>
                    <div className='h-full w-full flex gap-4'>
                        <div className='h-full w-full justify-center flex flex-col'>
                            <img src={landing_page01}></img>
                        </div>
                        <div className='h-full w-full justify-center flex flex-col gap-4'>
                            <h1 className='text-white text-5xl font-bold'>Kamu Teenager? Tapi tak tahu arah?</h1>
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
                                <h1 className='text-primary-color text-5xl font-bold'>Lorem ipsum doret si amet</h1>
                                <p className='text-black text-lg text-opacity-70 font-normal'>Yuk ketahui apa saja yang kita alami saat remaja dan persiapkan diri kita
                                    untuk masa depan yang kita impikan! </p>
                                <div>
                                    <Button className="w-auto" variant="light">
                                        Mulai
                                        <ArrowRight />
                                    </Button>
                                </div>
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
                                <h1 className='text-primary-color text-5xl font-bold'>Lorem ipsum doret si amet</h1>
                                <p className='text-black text-lg text-opacity-70 font-normal'>Yuk ketahui apa saja yang kita alami saat remaja dan persiapkan diri kita
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
                </div>
                <div className='h-[640px] w-full px-view-h-padding py-nm flex justify-center items-center border-t-[4px]'>
                    <div className='h-min w-full justify-center py-[30px]'>
                        <div className='w-full h-full backdrop-blur-md items-center bg-white/30 border-2 border-black/10 rounded-lg px-[30px] py-[30px] flex flex-col gap-4'>
                            <h1 className='text-primary-color text-5xl font-bold'>Lorem ipsum doret si amet</h1>
                            <p className='text-black text-lg text-opacity-70 font-normal'>Yuk ketahui apa saja yang kita alami saat remaja dan persiapkan diri kita
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
            </div>
            <div className='px-[30px] py-[30px] border-t-[2px] flex justify-center items-center'>
                <p className='text-black text-lg text-opacity-70 font-normal'>2024 Made by </p>
                <p className='text-primary-color text-lg text-opacity-70 font-normal'>Impact Team</p>
            </div>
        </Page>
    );
}
