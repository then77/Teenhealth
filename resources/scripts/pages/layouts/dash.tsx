import QuizDetect from "@/components/quiz-detect";
import React from "react";
import { Outlet } from "react-router";

export default function DashLayout() {
    return (
        <>
            <Outlet />
            <QuizDetect />
        </>
    );
}