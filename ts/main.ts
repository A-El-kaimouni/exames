import { Colddown } from './modules/colddown';
import { exams } from './helpers/exams';

// set main variables
const exam_hour = 20;
const exam_minute = 0;

// set document elemnts
const examCnt = document.getElementById('exam-cnt');
const examEle : HTMLElement = document.getElementById('exam');
const timerCnt = document.getElementById('timer-cnt');
const timerPara = document.getElementById('timer-para');
const timer = document.getElementById('timer');
const examTimerCnt = document.getElementById('exam-timer-cnt');
const examTimer = document.getElementById('exam-timer');

// set date variables
const hour = (new Date()).getHours();
const day = (new Date()).getDate();
const year = (new Date()).getFullYear();
const month = (new Date()).getMonth();

if(exams[day]) {
    const exam : Exam = exams[day];
    if(hour >= exam_hour + exam.duration + exam_minute / 60) {
        timerCnt.style.display = 'none';
        examCnt.style.display = 'block';
        examEle.setAttribute('src', exam.src.corr);
        examTimerCnt.innerHTML = 'correction';
    } else {
        const examColdDown = new Colddown(new Date(year, month, day, exam_hour,exam_minute), timer);
        timerPara.innerText = `Next exam in ${exam.module}`
        examColdDown.start(() => {
            timerCnt.style.display = 'none';
            examCnt.style.display = 'block';
            examEle.setAttribute('src', exam.src.exam);
            const examDurationColdDown = new Colddown(new Date(year, month, day, exam_hour + exam.duration ,exam_minute + parseInt(((exam.duration - Math.floor(exam.duration)) * 60).toString())), examTimer);
            examDurationColdDown.start(() => {
                examEle.setAttribute('src', exam.src.corr);
                examTimer.innerHTML = 'correction';
            })
        })
    }
} else {
    timerCnt.innerText = 'sorry there is no exam today...\n check tommorow';
}