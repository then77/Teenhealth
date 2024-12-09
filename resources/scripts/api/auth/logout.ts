import axios, { AxiosError, AxiosResponse } from "axios";
import { apiErrorMessageParser } from "@/lib/forms";
import { addCSRFToken } from "@/api";

export default async function logout(
    resolve: (value: AxiosResponse<any, any>, message?: string) => void,
    reject: (reason?: any) => void
) {
    try {
        addCSRFToken(axios);
        const response = await axios.post('/logout');

        setTimeout(() => window.location.replace('/'), 200);
        resolve(response);
        
    } catch (error: any) {

        // check error type
        if (!axios.isAxiosError(error)) {
            console.error(error);
            reject();
        }

        const axiosError = error as AxiosError<any, any>;
        const message = axiosError.response
            ? await apiErrorMessageParser(axiosError.response)
            : null;

        if (message) {
            reject(message);
        } else {
            reject();
        }
    }
}
