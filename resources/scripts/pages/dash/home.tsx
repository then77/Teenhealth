
import { getQuizzes } from "@/api/dash/get-quiz";
import { getUserCourses } from "@/api/dash/get-user-course";
import Page from "@/components/page-component";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils";
import { Quiz } from "@/store/quiz";
import { UserCourse } from "@/store/user-course";
import { ArrowRight, BookMarked, LoaderCircle } from "lucide-react";
import React, { useEffect } from "react";
import { Link } from "react-router";

export default function DashboardHome() {

    const [courses, setCourses] = React.useState<UserCourse[] | null>(null);
    const [quizzes, setQuizzes] = React.useState<Quiz[] | null>(null);

    useEffect(() => {
        getUserCourses().then((data) => setCourses(data.data));
        getQuizzes().then((data) => setQuizzes(data.data));
    }, []);

    return (
        <Page title="Dashboard">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-transparent shadow-none border-none rounded-none">
                    <CardHeader className="p-6 bg-white border-zinc-300 rounded-t-xl border border-zinc-200">
                        <CardTitle>Progress Belajar</CardTitle>
                    </CardHeader>
                    <CardContent className={cn(
                        "bg-white/60 shadow-sm min-h-80 p-6 border border-t-0 border-zinc rounded-b-xl",
                        (!courses || courses.length === 0) && "flex justify-center items-center"
                    )}>
                        {!courses && (<LoaderCircle className="animate-spin text-zinc-600" />)}
                        {courses?.length === 0 && (
                            <div className="text-center flex items-center flex-col">
                                <BookMarked className="h-12 w-12 mb-4" />
                                <h1>Belum ada kursus yang diikuti</h1>
                                <Button className="mt-4" asChild>
                                    <Link to="/dashboard/materi">Mulai Belajar <ArrowRight /></Link>
                                </Button>
                            </div>
                        )}
                        {courses?.length! > 0 && courses?.map((course, i) => (
                            <Card className="p-4">
                                <p>{course.course.name}</p>
                            </Card>
                        ))}
                    </CardContent>
                </Card>
                <Card className="bg-transparent shadow-none border-none rounded-none">
                    <CardHeader className="p-6 bg-white border-zinc-300 rounded-t-xl border border-zinc-200">
                        <CardTitle>Cek Quiz</CardTitle>
                    </CardHeader>
                    <CardContent className={cn(
                        "bg-white/60 shadow-sm min-h-80 p-6 border border-t-0 border-zinc rounded-b-xl",
                        (!quizzes || quizzes.length === 0) && "flex justify-center items-center"
                    )}>
                        {!quizzes && (<LoaderCircle className="animate-spin text-zinc-600" />)}
                    </CardContent>
                </Card>
            </div>
        </Page>
    );
}