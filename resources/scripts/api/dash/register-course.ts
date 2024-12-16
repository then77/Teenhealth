import axios, { AxiosError, AxiosResponse } from "axios";
import { addCSRFToken } from "@/api";

export default async function registerCourse(
    course_id: number,
    resolve: (value: AxiosResponse<any, any>, message?: string) => void,
    reject: (reason?: any) => void
) {
    try {
        addCSRFToken(axios);
        const response = await axios.post("/api/user/courses", {
            course: course_id
        });

        resolve(response);
        
    } catch (error: any) {

        // check error type
        if (!axios.isAxiosError(error)) {
            console.error(error);
            reject();
        }

        const axiosError = error as AxiosError<any, any>;
        const message = axiosError.response;

        if (message) {
            reject(message);
        } else {
            reject();
        }
    }
}
