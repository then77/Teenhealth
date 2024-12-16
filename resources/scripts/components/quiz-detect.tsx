import React, { useState, useEffect } from 'react';
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";

import Banner from "@/assets/illustrations/winner_banner.png";
import {useStoreActions, useStoreState} from "@/store";
import { Navigate } from "react-router";

export default function QuizDetect() {
    const quiz = useStoreState((state) => state.quiz_session);
    const ack = useStoreActions((actions) => actions.setSessionAck);
    const [open, setOpen] = useState(false);

    const navigateToQuiz = () => setOpen(true);
    useEffect(() => {
        if (quiz != null && !quiz.notified)
            setTimeout(() => ack(true), 200);
    }, [quiz]);

    return quiz != null ? (
            <AlertDialog defaultOpen={!quiz.notified}>
                <AlertDialogContent className="max-w-md p-0 border-0">
                    <img src={Banner} alt="Quiz Detect" className="w-full h-auto rounded-t-lg"/>
                    <AlertDialogHeader className="flex justify-center items-center text-sm p-4 pb-0 gap-0.5">
                        <h1 className="text-3xl font-semibold text-sky-600 text-center">Quiz mu belum selesai!</h1>
                        <p className="text-center">
                            Klik "lanjutkan" untuk langsung pergi ke quiz mu:
                            <br />{quiz.name}
                        </p>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="p-4">
                        <AlertDialogCancel>Tutup</AlertDialogCancel>
                        <AlertDialogAction onClick={navigateToQuiz}>Lanjutkan</AlertDialogAction>
                    </AlertDialogFooter>
                    {open && <Navigate to={`/quiz/${quiz.id}`} />}
                </AlertDialogContent>
            </AlertDialog>
    ) : null;
}
