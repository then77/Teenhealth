import { z } from "zod";
import { resetPasswordScheme } from "@/lib/schemes/auth-form";
import { UseFormReturn } from "react-hook-form";
import axios, { AxiosError, AxiosResponse } from "axios";
import { apiErrorMessageParser } from "@/lib/forms";
import { addCSRFToken } from "@/api";

export default async function dataSubmit(
    values: z.infer<typeof resetPasswordScheme> & { token?: string },
    form: UseFormReturn<z.infer<typeof resetPasswordScheme>>,
    resolve: (value: AxiosResponse<any, any>, message?: string) => void,
    reject: (reason?: any) => void,
) {
    const { confirmPassword, ...valuesToSubmit } = values;

    try {
        addCSRFToken(axios);
        const response = await axios.post(location.pathname, valuesToSubmit);

        setTimeout(() => window.location.replace('/login'), 200);
        resolve(response);

    } catch (error: any) {

        // check error type
        if (!axios.isAxiosError(error)) {
            console.error(error);
            reject();
        }

        const axiosError = error as AxiosError<any, any>;
        const message = axiosError.response
            ? await apiErrorMessageParser(axiosError.response, form)
            : null;

        if (message) {
            reject(message);
        } else {
            reject();
        }
    }
}
