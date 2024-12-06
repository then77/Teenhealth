import { z } from "zod";
import { forgotPasswordScheme, loginScheme, registerScheme } from "@/lib/schemes/auth-form";
import { UseFormReturn } from "react-hook-form";
import axios, { AxiosError, AxiosResponse } from "axios";
import { apiErrorMessageParser } from "@/lib/forms";
import { addCSRFToken } from "@/api";

export default async function dataSubmit(
    values: z.infer<typeof loginScheme | typeof registerScheme | typeof forgotPasswordScheme>,
    form: UseFormReturn<z.infer<typeof loginScheme>> | UseFormReturn<z.infer<typeof registerScheme>> | UseFormReturn<z.infer<typeof forgotPasswordScheme>>,
    resolve: (value: AxiosResponse<any, any>, message?: string) => void,
    reject: (reason?: any) => void,
    reload?: boolean
) {
    let valuesToSubmit = { ...values };
    if ((values as z.infer<typeof registerScheme>).confirmPassword) {
        const { confirmPassword, ...rest } = valuesToSubmit as z.infer<typeof registerScheme>;
        valuesToSubmit = rest;
    }

    try {
        addCSRFToken(axios);
        const response = await axios.post(location.pathname, valuesToSubmit);

        if (reload) {
            setTimeout(() => window.location.replace('/dashboard'), 200);
        }

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
