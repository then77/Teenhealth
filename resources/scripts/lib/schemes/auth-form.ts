import { z } from "zod";

export const forgotPasswordScheme = z.object({
    email: z.string({ required_error: "Email wajib diisi." })
        .min(1, "Email wajib diisi.")
});

export const loginScheme = z.object({
    email: z.string({ required_error: "Email wajib diisi." })
        .min(1, "Email wajib diisi."),
    password: z.string({ required_error: "Password wajib diisi." })
        .min(1, "Password wajib diisi."),
    remember: z.boolean().default(false),
});

export const registerScheme = z.object({
    email: z.string({ required_error: "Email wajib diisi." })
        .min(1, "Email wajib diisi.")
        .email("Format email tidak valid."),
    name: z.string({ required_error: "Nama wajib diisi." })
        .min(3, "Nama minimal 3 karakter."),
    password: z.string({ required_error: "Password wajib diisi." })
        .min(8, "Password minimal 8 karakter.")
        .regex(/^(?=.*[a-z])(?=.*[A-Z]).*$/, "Password harus mengandung huruf kecil dan huruf besar.")
        .regex(/^(?=.*\d).*$/, "Password harus mengandung angka."),
    confirmPassword: z.string({ required_error: "Konfirmasi password wajib diisi." })
        .min(1, "Konfirmasi password wajib diisi.")
}).superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Password tidak sama.",
            path: ["confirmPassword"],
        });
    }
});