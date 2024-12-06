import React from "react";

import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router";

import Illustration from "@/assets/illustrations/ill_404.png";

export default function Error404() {

    return (
        <main className="flex flex-col justify-center items-center px-8 min-h-screen text-center animate-zoomIn">
            <h1 className="text-3.25xl sm:text-4xl lg:text-5xl font-bold text-sky-500 -mt-20 sm:-mt-32 pb-2 sm:pb-4">404 Not Found</h1>
            <p className="text-zinc-600 max-w-md">Sepertinya kamu tersesat, ayo kembali ke Teenhealth!</p>

            <Button
                className="mt-8"
                size="lg"
                asChild
            >
                <Link to="/">
                    Kembali Ke Home
                    <ArrowRight />
                </Link>
            </Button>

            <div className="fixed -bottom-2 left-0 w-full flex justify-center">
                <img className="max-h-32 sm:max-h-40 md:max-h-44 lg:max-h-52 transition-all duration-500 ease-out" src={Illustration} />
            </div>
        </main>
    );
}
