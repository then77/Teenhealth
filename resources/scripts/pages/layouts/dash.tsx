import React from "react";
import QuizDetect from "@/components/quiz-detect";
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Link, Outlet, useLocation } from "react-router";
import { Home } from "lucide-react";
import defaultAvatar from "@/assets/illustrations/avatar.png";

import Logo from "@/assets/logo/light_64.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useStoreState } from "@/store";
import { DropdownCustom } from "@/components/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

export default function DashLayout() {
    const location = useLocation();
    const user = useStoreState((state) => state.user);

    const links = [
        {
            title: "Dashboard",
            href: "/dashboard",
            icon: Home,
        },
        {
            title: "Materi",
            href: "/dashboard/materi",
            icon: Home,
        },
        {
            title: "Quiz",
            href: "/dashboard/quiz",
            icon: Home,
        },
    ]

    const getTitle = () => {
        // get title from links based on pathname
        const link = links.find(link => link.href === location.pathname);
        return link?.title;
    }

    return (
        <SidebarProvider className="ease-in-out">
            <div className="flex w-full min-h-screen">
                <Sidebar className="bg-white">
                    <SidebarHeader className="p-5 bg-white">
                        <div className="flex h-8 items-center">
                            <Link to="/"><img src={Logo} alt="Teenhealth" className="h-8 h-8" /></Link>
                        </div>
                    </SidebarHeader>
                    <SidebarContent className="bg-white flex flex-1 flex-col gap-4 p-5">
                        {links.map((link, i) => (
                            <Button key={i} variant="outline" asChild className={
                                cn("py-6 text-base", link.href === location.pathname
                                    && "border-sky-400 text-sky-500 hover:bg-white hover:text-sky-500")
                            }>
                                <Link to={link.href} className="flex items-center gap-2">
                                    <link.icon className="h-5 w-5" />
                                    <span>{link.title}</span>
                                </Link>
                            </Button>
                        ))}
                    </SidebarContent>
                </Sidebar>
                <main className="w-full h-full overflow-clip">
                    <header className="px-6 w-full relative z-10">
                        <div className="bg-gradient-to-b from-gray-50 via-gray-50 to-transparent pt-4">
                            <Card className="w-full shadow-sm">
                                <CardContent className="flex items-center justify-between gap-3 p-5 pr-6">
                                    <div className="flex gap-3">
                                        <SidebarTrigger />
                                        <h1 className="text-lg">{getTitle()}</h1>
                                    </div>
                                    <DropdownCustom user={user} noMargin>
                                        <Avatar className="w-8 h-8">
                                            <AvatarFallback>{user!.name.charAt(0).toUpperCase()}</AvatarFallback>
                                            <AvatarImage src={user!.profile_pic ?? defaultAvatar} className="w-10 h-10" />
                                        </Avatar>
                                    </DropdownCustom>
                                </CardContent>
                            </Card>
                        </div>
                    </header>
                    <div className="-mt-24 px-6 max-h-screen overflow-y-auto">
                        <section className="pt-28 md:pt-36 pb-8">
                            <Outlet />
                        </section>
                    </div>
                </main>
            </div>
            <QuizDetect />
        </SidebarProvider>
    );
}