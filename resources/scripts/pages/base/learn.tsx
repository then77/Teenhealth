import React from 'react';
import Page from '@/components/page-component';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

import image_learn from "@/assets/illustrations/learnImg.png";
import square_tile from "@/assets/illustrations/square.png";
import Footer from '@/components/footer';
import { useStoreState } from '@/store';
import { Navigate } from 'react-router';

export default function Learn() {

     // Store hooks
     const user = useStoreState((state) => state.user);

     // Redirect to login if user is not logged in
     if (user) {
        return <Navigate to="/dashboard/materi" />;
     }

    return (
        <Page title="Learn">
            <div className='bg-repeat' style={{ backgroundImage: `url(${square_tile})`, backgroundSize: `24px` }}>
                <div className='h-min w-full px-view-h-padding py-nm flex justify-center items-center'>
                    <div className='h-min w-full justify-center py-[30px]'>
                        <div className='w-full h-full backdrop-blur-md items-center bg-white/30 border-2 border-black/10 rounded-lg px-[30px] py-[30px] flex flex-col gap-4'>
                            <h1 className='text-primary-color text-4xl font-bold'>Ayo, kita Belajar bersama</h1>
                            <p className='text-black text-opacity-70 font-normal'>Yuk ketahui apa saja yang kita alami saat remaja dan persiapkan diri kita untuk masa depan yang kita impikan!</p>
                        </div>
                        <div className='flex justify-center px-[30px] py-[30px]'>
                            <div className='w-full max-w-4xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden'>
                                <div className='flex md:flex-row'>
                                    <div className='md:w-1/2'>
                                        <img src={image_learn} alt="Learn" className='w-full h-full object-cover' />
                                    </div>
                                    <div className='md:w-1/2 p-6 flex flex-col '>
                                        <h2 className='text-primary-color text-2xl font-bold'>Future Planning</h2>
                                        <p className='text-black text-opacity-70 font-normal mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
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
                        <div className='flex justify-center px-[30px] py-[30px]'>
                            <div className='w-full max-w-4xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden'>
                                <div className='flex md:flex-row'>
                                    <div className='md:w-1/2'>
                                        <img src={image_learn} alt="Learn" className='w-full h-full object-cover' />
                                    </div>
                                    <div className='md:w-1/2 p-6 flex flex-col '>
                                    <h2 className='text-primary-color text-2xl font-bold'>Future Planning</h2>
                                    <p className='text-black text-opacity-70 font-normal mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                        <div className='mt-6'>
                                            <Button className="w-auto" variant="light">
                                                Mulai
                                                <ArrowRight />
                                            </Button>

                                        </div>
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
