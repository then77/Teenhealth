import { AppSidebar } from "@/components/app-sidebar";
import Page from "@/components/page-component";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Icon } from "@iconify/react";
import { ArrowRight, Check, CheckCircle, CheckCircle2, CircleX, Hourglass } from "lucide-react";
import React from "react";

export default function Dashboard() {
    return (
        <Page title="Dashboard">
            <div className="h-full w-full flex">
                <SidebarProvider>
                    <AppSidebar>
                    </AppSidebar>
                </SidebarProvider>
                <div className="w-full p-3 flex flex-col gap-3">
                    <div className="bg-white h-16 rounded-md w-full border-2 border-black/10 flex gap-3 p-3 items-center">
                        <Icon icon="solar:book-broken" className="size-6" />
                        <h1>Materi</h1>
                    </div>

                    <div className="flex h-72 w-full bg-blue-radial rounded-md border-b-8 p-8 border-[#7BC5FA]">
                        <div className="w-full h-full flex-col flex justify-center gap-5">
                            <div className="flex flex-col gap-1">
                            <h1 className="text-3xl font-bold text-white">Ayo lanjutin progress kamu!</h1>
                            <p className="text-white">Teruskan materi pembelajaran kamu hingga selesai dan selesaikan semua tantangan kuis yang tersedia!</p>
                            </div>
                            <div>
                                <Button variant="light">
                                    Mulai
                                    <ArrowRight />
                                </Button>
                            </div>
                        </div>
                        <div className="w-full h-full bg-pink-500/50"></div>
                    </div>
                    <div className="w-full flex-col justify-start items-center gap-3 inline-flex">
                        <div className="w-full justify-start items-start gap-3 inline-flex">
                            <div className="w-full flex-col justify-start items-center gap-5 inline-flex">
                                <div className="self-stretch w-full grow basis-0 flex-col justify-start items-center flex">
                                    <div className="bg-white w-full border-2 border-black/10 items-center inline-flex px-5 py-5">
                                        <h1>Perkembangan Materi</h1>
                                    </div>

                                    {/*Row for the progress*/}
                                    <div className="self-stretch flex-col justify-start items-start flex">
                                        <div className="group w-full p-5 border-r-8 bg-yellow-gradient border-[#f8da43] justify-between items-center inline-flex">
                                            <div className="w-full self-stretch flex-col justify-center items-start gap-2.5 inline-flex">
                                                <p>Future Prep</p>
                                                <div className="w-full h-3 relative rounded-full border border-black/10">
                                                    <div className="w-[40%] h-3 left-0 top-[0.50px] absolute bg-[#2c9cec] rounded-full border-b-2 border-[#7ac4fa]" />
                                                </div>
                                                <p>5/13 Submateri • 48% Selesai</p>
                                            </div>
                                            <div className="w-full flex justify-end">
                                                <ArrowRight />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="self-stretch flex-col justify-start items-start flex">
                                        <div className="w-full p-5 border-r-8 bg-red-gradient border-red-400 justify-between items-center inline-flex">
                                            <div className="w-full self-stretch flex-col justify-center items-start gap-2.5 inline-flex">
                                                <p>Future Prep</p>
                                                <div className="w-full h-3 relative rounded-full border border-black/10">
                                                    <div className="w-[40%] h-3 left-0 top-[0.50px] absolute bg-[#2c9cec] rounded-full border-b-2 border-[#7ac4fa]" />
                                                </div>
                                                <p>5/13 Submateri • 48% Selesai</p>
                                            </div>
                                            <div className="w-full flex justify-end">
                                                <ArrowRight />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="self-stretch flex-col justify-start items-start flex">
                                        <div className="w-full p-5 border-r-8 bg-green-radient border-green-400 justify-between items-center inline-flex">
                                            <div className="w-full self-stretch flex-col justify-center items-start gap-2.5 inline-flex">
                                                <p>Future Prep</p>
                                                <div className="w-full h-3 relative rounded-full border border-black/10">
                                                    <div className="w-[40%] h-3 left-0 top-[0.50px] absolute bg-[#2c9cec] rounded-full border-b-2 border-[#7ac4fa]" />
                                                </div>
                                                <p>5/13 Submateri • 48% Selesai</p>
                                            </div>
                                            <div className="w-full flex justify-end">
                                                <ArrowRight />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="w-full flex-col justify-start items-center gap-2.5 inline-flex">
                                <div className="w-full grow flex-col justify-start items-center flex">
                                    <div className="self-stretch p-5 bg-white border-2 border-black/10 justify-start items-center gap-[30px] inline-flex">
                                        <h1>Riwayat Kuis</h1>
                                    </div>

                                    {/*Row for the quiz tracking*/}
                                    <div className="w-full flex-col justify-start items-start flex">
                                        <div className="w-full p-5 bg-white/60 border-l-2 border-r-2 border-t-2 border-b transition-colors duration-300 ease-in-out hover:bg-black/5 text-black/60 border-black/10 justify-between items-center inline-flex">
                                            <div className="inline-flex gap-5">
                                                <CheckCircle2 className="text-green-400" />
                                                <h1 className="text-black">Future Prep</h1>
                                            </div>
                                            <p>10 menit yang lalu</p>
                                        </div>
                                    </div>

                                    <div className="w-full flex-col justify-start items-start flex">
                                        <div className="w-full p-5 bg-white/60 border-l-2 border-r-2 border-t-2 border-b transition-colors duration-300 ease-in-out hover:bg-black/5 text-black/60 border-black/10 justify-between items-center inline-flex">
                                            <div className="inline-flex gap-5">
                                                <CircleX className="text-red-400" />
                                                <h1 className="text-black">Future Prep</h1>
                                            </div>
                                            <p>10 menit yang lalu</p>
                                        </div>
                                    </div>

                                    <div className="w-full flex-col justify-start items-start flex">
                                        <div className="w-full p-5 bg-white/60 border-l-2 border-r-2 border-t-2 border-b transition-colors duration-300 ease-in-out hover:bg-black/5 text-black/60 border-black/10 justify-between items-center inline-flex">
                                            <div className="inline-flex gap-5">
                                                <Hourglass className="text-yellow-600" />
                                                <h1 className="text-black">Future Prep</h1>
                                            </div>
                                            <p>10 menit yang lalu</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
}