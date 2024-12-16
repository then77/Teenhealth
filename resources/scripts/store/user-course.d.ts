import { Course } from "./course";

export interface UserCourse {
    created_at: string;
    updated_at: string;
    progress_id: number;
    progress_percent: number;
    completed: boolean;
    course: Course;
}