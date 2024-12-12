
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function Footer() {
    return (
        <div className='px-[30px] py-[30px] border-t-[2px] text-black text-lg text-opacity-70 font-normal text-center'>
            <p>
            © 2024 Made by <span className='text-primary-color'>Impact Team</span>
            </p>
        </div>
    )
};