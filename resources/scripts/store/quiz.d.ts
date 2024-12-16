export interface Quiz {
    id: number;
    type: number;
    name: string;
    description: string;
    session?: QuizSession;
}