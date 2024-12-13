import React, { useState } from 'react';
import Page from '@/components/page-component';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

import ill_1 from "@/assets/illustrations/Saly_50.png";
import ill_2 from "@/assets/illustrations/Saly_51.png";

import square_tile from "@/assets/illustrations/square.png";
import Footer from '@/components/footer';

export default function Quiz() {
    const [selected, setSelected] = useState(0);

    const handleSelect = (index: number) => {
        setSelected(index);
    };
    return (
        <Page title="Quiz">
            <div className='bg-repeat min-h-screen p-4' style={{ backgroundImage: `url(${square_tile})`, backgroundSize: '24px' }}>
                <img src={ill_1} alt="Illustration 1" className='absolute top-20 left-0 w-40 h-auto' />
                <img src={ill_2} alt="Illustration 2" className='absolute bottom-20 right-0 w-40 h-auto' />
                <div className='max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold mb-4'>Materi abc - Quiz 2/8</h2>
                    <p className='mb-6'>Kamu akhir-akhir ini merasa sangat tertekan dari kegiatan sekolah. Kamu berpikir bahwa sudah saatnya untuk melakukan hal ekstrim, namun kamu menyadari bahwa hal ini tidak baik. Apa yang sebaiknya kamu lakukan?</p>

                    <div className='grid grid-cols-2 gap-4'>
                        {/* Opsi jawaban */}
                        <div
                            className={`p-4 rounded-lg border text-center cursor-pointer transition-opacity ${selected === 0 ? 'opacity-100 bg-blue-200' : 'opacity-60 hover:opacity-100 bg-gray-100'} ${selected === 0 ? 'border-blue-500' : 'border-gray-300'}`}
                            onClick={() => handleSelect(0)}
                        >
                            Simpan perasaanmu sendiri dan tetap belajar keras.
                        </div>
                        <div
                            className={`p-4 rounded-lg border text-center cursor-pointer transition-opacity ${selected === 1 ? 'opacity-100 bg-blue-200' : 'opacity-60 hover:opacity-100 bg-gray-100'} ${selected === 1 ? 'border-blue-500' : 'border-gray-300'}`}
                            onClick={() => handleSelect(1)}
                        >
                            Bicarakan perasaanmu dengan orang terpercaya.
                        </div>
                        <div
                            className={`p-4 rounded-lg border text-center cursor-pointer transition-opacity ${selected === 2 ? 'opacity-100 bg-blue-200' : 'opacity-60 hover:opacity-100 bg-gray-100'} ${selected === 2 ? 'border-blue-500' : 'border-gray-300'}`}
                            onClick={() => handleSelect(2)}
                        >
                            Simpan perasaanmu sendiri dan tetap belajar keras.
                        </div>
                        <div
                            className={`p-4 rounded-lg border text-center cursor-pointer transition-opacity ${selected === 3 ? 'opacity-100 bg-blue-200' : 'opacity-60 hover:opacity-100 bg-gray-100'} ${selected === 3 ? 'border-blue-500' : 'border-gray-300'}`}
                            onClick={() => handleSelect(3)}
                        >
                            Simpan perasaanmu sendiri dan tetap belajar keras.
                        </div>
                    </div>

                    <div className='flex justify-between items-center mt-6'>
                        <Button
                            className='bg-gray-200 hover:bg-yellow-400 transition-colors text-black'
                        >
                            Kembali
                        </Button>

                        <Button
                            className='bg-gray-200 hover:bg-blue-400 transition-colors text-black flex items-center'
                        >
                            Selanjutnya <ArrowRight className='ml-2' />
                        </Button>
                    </div>
                </div>


            </div>
            <Footer />
        </Page>
    );
}
