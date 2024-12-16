import axios from "axios";
import { addCSRFToken } from "@/api";

export async function getCourses() {
    try {
        addCSRFToken(axios);
        const response = await axios.get(`/api/courses`);
        return response.data;
    } catch (error: any) {
        console.error(error);
    }
}

export async function getCourse(courseId: string) {
    try {
        addCSRFToken(axios);
        const response = await axios.get(`/api/courses/${courseId}`);
        return response.data;
    } catch (error: any) {
        console.error(error);
    }
}