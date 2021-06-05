interface Exam {
    src: {
        exam: string;
        corr: string;
    };
    duration: number;
    module: string;
}

interface Exams {
    [key: string] : Exam;
}