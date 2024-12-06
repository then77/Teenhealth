import React, { useState, useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { AtSign, Key, Eye, EyeOff, ArrowRight, User } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, UseFormReturn } from "react-hook-form"
import { z } from "zod"

import {
    forgotPasswordScheme,
    loginScheme,
    registerScheme
} from "@/lib/schemes/auth-form";
import dataSubmit from "@/api/auth";

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
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { cn } from "@/lib/utils";
import {
    Card,
    CardDescription,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function AuthLayout() {
    const location = useLocation();

    const getPath = () => {
        switch (location.pathname) {
            case "/login":
                return "login";
            case "/register":
                return "register";
            case "/forgot-password":
                return "forgot-password";
            default:
                return null;
        }
    };

    // Form hooks at component level
    const loginForm = useForm<z.infer<typeof loginScheme>>({
        resolver: zodResolver(loginScheme),
    });

    const registerForm = useForm<z.infer<typeof registerScheme>>({
        resolver: zodResolver(registerScheme),
    });

    const forgotPasswordForm = useForm<z.infer<typeof forgotPasswordScheme>>({
        resolver: zodResolver(forgotPasswordScheme),
    });

    const getCurrentForm = () => {
        const path = getPath();
        switch (path) {
            case "login":
                return loginForm;
            case "register":
                return registerForm;
            case "forgot-password":
                return forgotPasswordForm;
            default:
                return null;
        }
    };

    const form = getCurrentForm();

    useEffect(() => {
        const currentForm = getCurrentForm();
        if (currentForm) {
            currentForm.clearErrors();
        }
    }, [location.pathname]);

    if (!getPath() || !form) {
        return <Navigate to="/" replace />;
    }

    const onSubmit = (() => {
        const path = getPath();
        switch (path) {
            case "login":
                return (v: z.infer<typeof loginScheme>, f: UseFormReturn<z.infer<typeof loginScheme>>) => toast.promise(
                    new Promise((resolve, reject) => dataSubmit(v, f, resolve, reject, true)), {
                    loading: "Logging in...",
                    success: (e: any) => e ? e.data.message : "Login berhasil!",
                    error: (e) => e ? (typeof e === 'string' ? e : e.message) : "Login gagal. Coba lagi nanti."
                });
            case "register":
                return (v: z.infer<typeof registerScheme>, f: UseFormReturn<z.infer<typeof registerScheme>>) => toast.promise(
                    new Promise((resolve, reject) => dataSubmit(v, f, resolve, reject, true)), {
                    loading: "Registering account...",
                    success: (e: any) => e ? e.data.message : "Akun berhasil terdaftar!",
                    error: (e) => e ? (typeof e === 'string' ? e : e.message) : "Registrasi gagal. Coba lagi nanti."
                });
            case "forgot-password":
                return (v: z.infer<typeof forgotPasswordScheme>, f: UseFormReturn<z.infer<typeof forgotPasswordScheme>>) => toast.promise(
                    new Promise((resolve, reject) => dataSubmit(v, f, resolve, reject, false)), {
                    loading: "Sending request...",
                    success: (e: any) => e ? e.data.message : "Berhasil kirim! Silahkan cek email reset.",
                    error: (e) => e ? (typeof e === 'string' ? e : e.message) : "Gagal kirim. Coba lagi nanti."
                });
            default:
                return null;
        }
    });

    return (
        <>
            <main className="flex flex-col justify-center items-center px-8 pt-16 py-16 min-h-screen gap-y-8 animate-zoomIn">
                <h1 className="text-3.25xl sm:text-4xl font-bold text-sky-500 text-center">
                    {getPath() === "login" ? "Welcome back!" : getPath() === "register" ? "Welcome!" : "Reset Password"}
                </h1>

                <AnimatePresence mode="wait" initial={false}>
                    <Form {...form as any} key={location.pathname}>
                        <form onSubmit={form!.handleSubmit((values) => (onSubmit() as any)!(values, form))} className="w-full max-w-md h-auto">
                            <Card>
                                <CardContent className="space-y-4 text-zinc-800">

                                    {getPath() === "forgot-password" && (
                                        <motion.div
                                            key="forgot-password-description"
                                            initial={{ opacity: 0, y: -10, height: 0 }}
                                            animate={{ opacity: 1, y: 0, height: "auto" }}
                                            exit={{ opacity: 0, y: -10, height: 0 }}
                                            transition={{ duration: 0.1 }}
                                        >
                                            <CardDescription className="text-center">Masukan email mu untuk mereset password akunmu. Email berisi link reset akan otomatis terkirim ketika email address terhubung dengan akun yang terdaftar.</CardDescription>
                                        </motion.div>
                                    )}

                                    <FormField
                                        control={form!.control as any}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <FormInput
                                                        prefixIcon={<AtSign className="top-[.77rem]" />}
                                                        placeholder="Email address"
                                                        disabled={form!.formState.isSubmitting}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />


                                    {getPath() === "register" && (
                                        <motion.div
                                            key="input-name"
                                            initial={{ opacity: 0, y: 10, height: 0 }}
                                            animate={{ opacity: 1, y: 0, height: "auto" }}
                                            exit={{ opacity: 0, y: 10, height: 0 }}
                                            transition={{ duration: 0.1 }}
                                            className="h-auto transform-gpu"
                                        >
                                            <FormField
                                                control={form!.control as any}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <FormInput
                                                                prefixIcon={<User />}
                                                                placeholder="Nama"
                                                                disabled={form!.formState.isSubmitting}
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </motion.div>
                                    )}

                                    {(getPath() === "login" || getPath() === "register") && (
                                        <motion.div
                                            key="input-password"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.1 }}
                                            className="h-auto transform-gpu"
                                        >
                                            <PasswordInput
                                                form={form}
                                                forgot={getPath() === "login"}
                                                confirmation={false}
                                                disabled={form!.formState.isSubmitting}
                                            />
                                        </motion.div>
                                    )}
                                    {getPath() === "register" && (
                                        <motion.div
                                            key="input-confirm-password"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.1 }}
                                            className="h-auto transform-gpu"
                                        >
                                            <PasswordInput
                                                form={form}
                                                forgot={false}
                                                confirmation={true}
                                                disabled={form!.formState.isSubmitting}
                                            />
                                        </motion.div>
                                    )}

                                </CardContent>
                                <CardFooter className={cn("flex relative z-[3] gap-y-4", getPath() === "login" ? "justify-between flex-col sm:flex-row" : "justify-center sm:justify-end")}>
                                    {getPath() === "login" && <RememberMe form={form} disabled={form!.formState.isSubmitting} />}

                                    <div className="flex gap-x-2">
                                        <Button variant="outline" size="md" disabled={form!.formState.isSubmitting} asChild>
                                            <Link to={getPath() === "login" ? "/register" : "/login"}>
                                                {getPath() === "login" ? "Daftar" : "Login"}
                                            </Link>
                                        </Button>
                                        <Button type="submit" size="md" disabled={form!.formState.isSubmitting}>
                                            {getPath() === "login" ? "Login" : getPath() === "register" ? "Daftar" : "Reset"}
                                            <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </form>
                    </Form>
                </AnimatePresence>
            </main >

            {/* Illustrations */}
            < div className="fixed z-[-1] top-0 left-0 pt-12 flex items-center justify-between min-h-screen w-full select-none pointer-events-none" >
                <img src={IllLeft} alt="Illustration Left" className="absolute -left-28 h-64 animate-spin" style={{ animationDuration: "90s", animationDelay: "10s", animationTimingFunction: "cubic-bezier(0.07, 0, 0.93, 1)" }} />
                <img src={IllRight} alt="Illustration Right" className="absolute -right-20 h-64 animate-shake" style={{ animationDelay: "10s", animationTimingFunction: "cubic-bezier(0.07, 0, 0.93, 1)" }} />
            </div>
        </>
    );
}

function PasswordInput({ form, forgot, confirmation, disabled }: {
    form: any;
    forgot: boolean;
    confirmation: boolean;
    disabled: boolean;
}) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <FormField
            control={form.control}
            name={confirmation ? "confirmPassword" : "password"}
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
                            placeholder={confirmation ? "Konfirmasi password" : "Password"}
                            {...field}
                        />
                    </FormControl>
                    {forgot ? (
                        <div
                            className="relative h-6 flex justify-between"
                        >
                            <div className="flex items-center">
                                <FormMessage />
                            </div>
                            <Button variant="link" className="h-6 p-0" asChild>
                                <Link to="/forgot-password">Lupa password?</Link>
                            </Button>
                        </div>
                    ) : <FormMessage />}
                </FormItem>
            )}
        />
    );
}

function RememberMe({ form, disabled }: { form: any, disabled: boolean }) {
    return (
        <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <div className="flex items-center gap-x-2">
                            <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                disabled={disabled}
                            />
                            <FormLabel>Ingat saya</FormLabel>
                        </div>
                    </FormControl>
                </FormItem>
            )}
        />
    );
}
