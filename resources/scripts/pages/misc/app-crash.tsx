
import React from "react";

import { Button } from "@/components/ui/button";
import { RotateCw } from 'lucide-react';

import logoLight from "@/assets/logo/light_64.png";

export default function AppCrash() {
  return <main className="flex flex-col items-center justify-center h-screen text-center">
    <img className="w-12 mb-8" src={logoLight} />
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400 pb-4">Page has crashed</h1>
    <p className="text-stone-600 max-w-md">Sepertinya ada masalah ketika memuat halaman ini. Coba refresh halaman. Jika masih tidak bisa, hubungi tim kami.</p>

    <Button
      onClick={() => window.location.reload()}
      className="mt-8"
      size="lg"
    >
      <RotateCw />
      Refresh Page
    </Button>
  </main>
}
