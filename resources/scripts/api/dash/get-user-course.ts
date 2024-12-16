import axios from "axios";
import { addCSRFToken } from "@/api";

export async function getUserCourses() {
    try {
        addCSRFToken(axios);
        const response = await axios.get(`/api/user/courses`);
        return response.data;
    } catch (error: any) {
        console.error(error);
    }
}