import axios from "axios";
import { addCSRFToken } from "@/api";

export async function getQuizzes() {
    try {
        addCSRFToken(axios);
        const response = await axios.get(`/api/quizzes`);
        return response.data;
    } catch (error: any) {
        console.error(error);
    }
}