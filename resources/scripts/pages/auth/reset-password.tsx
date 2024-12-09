"use client";

import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { AtSign, Key, Eye, EyeOff, ArrowRight } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { resetPasswordScheme } from "@/lib/schemes/auth-form";
import dataSubmit from "@/api/auth/reset";

import { toast } from "react-hot-toast";

import IllLeft from "@/assets/illustrations/ill_leftside.png";
import IllRight from "@/assets/illustrations/ill_rightside.png";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormInput,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import {
    Card,
    CardDescription,
    CardContent,
    CardFooter
} from "@/components/ui/card";

export default function ResetPassword() {
    const location = useLocation();
    const { token } = useParams();
    const [email, setEmail] = useState("");

    // Form hooks at component level
    const form = useForm<z.infer<typeof resetPasswordScheme>>({
        resolver: zodResolver(resetPasswordScheme),
    });

    const onSubmit = async (values: z.infer<typeof resetPasswordScheme>) => {
        const data = { ...values, token };
        await toast.promise(
            new Promise((resolve, reject) => dataSubmit(data, form, resolve, reject)), {
                loading: "Sending request...",
                success: (e: any) => e ? e.data.message : "Berhasil reset password!",
                error: (e) => e ? (typeof e === 'string' ? e : e.message) : "Gagal reset. Coba lagi nanti."
            });
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const email = urlParams.get('email');
        if (email) {
            setEmail(email);
            form.setValue("email", email);
        }
    }, []);

    return (
        <>
            <main className="flex flex-col justify-center items-center px-8 pt-16 py-16 min-h-screen gap-y-8 animate-zoomIn">
                <h1 className="text-3.25xl sm:text-4xl font-bold text-sky-500 text-center">
                    Reset Password
                </h1>

                <Form {...form as any} key={location.pathname}>
                    <form onSubmit={form!.handleSubmit(onSubmit)} className="w-full max-w-md h-auto">
                        <Card>
                            <CardContent className="space-y-4 text-zinc-800">
                                <CardDescription className="text-center">Masukan password baru untuk mereset password akunmu.</CardDescription>
                                <FormField
                                    control={form!.control as any}
                                    name="email"
                                    render={({ field: { value, ...field } }) => (
                                        <FormItem>
                                            <FormControl>
                                                <FormInput
                                                    prefixIcon={<AtSign className="top-[.77rem]" />}
                                                    placeholder="Loading..."
                                                    disabled={true}
                                                    value={email}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <PasswordInput
                                    form={form}
                                    confirmation={false}
                                    disabled={form.formState.isSubmitting}
                                />
                                <PasswordInput
                                    form={form}
                                    confirmation={true}
                                    disabled={form.formState.isSubmitting}
                                />

                            </CardContent>
                            <CardFooter className="flex relative z-[3] gap-y-4 justify-center sm:justify-end">
                                <div className="flex gap-x-2">
                                    <Button type="submit" size="md" disabled={form!.formState.isSubmitting}>
                                        Reset Password
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </form>
                </Form>
            </main >

            {/* Illustrations */}
            < div className="fixed z-[-1] top-0 left-0 pt-12 flex items-center justify-between min-h-screen w-full select-none pointer-events-none" >
                <img src={IllLeft} alt="Illustration Left" className="absolute -left-28 h-64 animate-spin" style={{ animationDuration: "90s", animationDelay: "10s", animationTimingFunction: "cubic-bezier(0.07, 0, 0.93, 1)" }} />
                <img src={IllRight} alt="Illustration Right" className="absolute -right-20 h-64 animate-shake" style={{ animationDelay: "10s", animationTimingFunction: "cubic-bezier(0.07, 0, 0.93, 1)" }} />
            </div>
        </>
    );
}

function PasswordInput({ form, confirmation, disabled }: {
    form: any;
    confirmation: boolean;
    disabled: boolean;
}) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <FormField
            control={form.control}
            name={confirmation ? "confirmPassword" : "newPassword"}
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <FormInput
                            prefixIcon={<Key className="top-[.77rem]" />}
                            suffixIcon={!confirmation && (
                                <span
                                    className="cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <Eye /> : <EyeOff />}
                                </span>
                            )}
                            disabled={disabled}
                            type={showPassword ? "text" : "password"}
                            placeholder={confirmation ? "Konfirmasi password" : "Password baru"}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
