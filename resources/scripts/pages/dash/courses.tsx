import React, { useEffect } from "react"
import Page from "@/components/page-component"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowRight, BookMarked, Link, LoaderCircle } from "lucide-react"
import { getCourses } from "@/api/dash/get-course"
import { Course } from "@/store/course"
import { Button } from "@/components/ui/button"
import toast from "react-hot-toast"
import registerCourse from "@/api/dash/register-course"
import { Navigate } from "react-router"

export default function DashboardCourses() {

    const [courses, setCourses] = React.useState<Course[] | null>(null);
    const [navigate, setNavigate] = React.useState<string | null>(null);
    useEffect(() => {
        getCourses().then((data) => setCourses(data.data));
    });

    const register = async (courseId: number) => {
        // check if success
        await toast.promise(
            new Promise((resolve, reject) => registerCourse(courseId, resolve, reject)), {
            loading: "Adding course...",
            success: (e: any) => {
                setNavigate(`/materi/${courseId}`);
                return e ? e.data.message : "Course berhasil ditambahkan!";
            },
            error: (e) => e ? (typeof e === 'string' ? e : e.data.message) : "Gagal menambahkan."
        });
    }

    return (
        <Page title="Dashboard">
            <Card className="bg-transparent shadow-none border-none rounded-none">
                <CardHeader className="p-6 bg-white border-zinc-300 rounded-t-xl border border-zinc-200">
                    <CardTitle>List materi</CardTitle>
                </CardHeader>
                <CardContent className={cn(
                    "bg-white/60 shadow-sm min-h-80 p-6 border border-t-0 border-zinc rounded-b-xl flex flex-col gap-4",
                    (!courses || courses.length === 0) && "justify-center items-center"
                )}>
                    {!courses && (<LoaderCircle className="animate-spin text-zinc-600" />)}
                    {courses?.length === 0 && (
                        <div className="text-center flex items-center flex-col">
                            <BookMarked className="h-12 w-12 mb-4" />
                            <h1>Sepertinya belum ada kursus yang tersedia.</h1>
                            <Button className="mt-4" asChild>
                                <Link to="/dashboard">Kembali <ArrowRight /></Link>
                            </Button>
                        </div>
                    )}
                    {courses?.length! > 0 && courses?.map((course, i) => (
                        <Card className="p-0 pr-2 flex items-center gap-4">
                            <img src={course.banner_url} className="h-full min-h-20 w-32 object-cover rounded-l-xl border-r border-zinc-200" />
                            <div className="w-full flex flex-col justify-center gap-y-2 py-3">
                                <h2 className="text-lg font-semibold">{course.name}</h2>
                                <p className="max-w-lg">{course.description}</p>
                            </div>
                            <div className="h-full p-4 flex justify-center items-center">
                                <Button className="py-5" onClick={() => register(course.id)}>
                                    Mulai <ArrowRight />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </CardContent>
            </Card>
            {navigate && <Navigate to={navigate} />}
        </Page>
    )
}