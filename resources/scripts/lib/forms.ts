import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { forgotPasswordScheme, loginScheme, registerScheme } from "@/lib/schemes/auth-form";
import { AxiosResponse } from "axios";

type ValidationError = { [key: string]: string };

export async function apiErrorMessageParser(
    response: AxiosResponse<any, any>,
    form: UseFormReturn<z.infer<typeof loginScheme>> | UseFormReturn<z.infer<typeof registerScheme>> | UseFormReturn<z.infer<typeof forgotPasswordScheme>>,
): Promise<string | null> {
    if (response.headers['content-type'] !== 'application/json') {
        return null;
    }

    try {
        const data = response.data;

        if (data.errors) {
            for (const [key, value] of Object.entries(data.errors)) {
                form.setError(key as any, {
                    type: "custom",
                    message: value as string
                });
            }

            return "Validasi gagal. Cek kembali form.";
        }

        return data.message ?? null;

    } catch (error) {
        return null;
    }
}
