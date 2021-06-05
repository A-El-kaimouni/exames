export class Colddown {
    target: HTMLElement;
    date: Date;
    callBack: Function;
    interval : number
    constructor(date, target) {
        this.target = target;
        this.date = date;
        this.callBack = () => {};
        this.interval = null;

        this.setTime()
    }

    setTime(date : Date = this.date) : void {
        var dateNow = new Date();
        var seconds = Math.floor((date.getTime() - dateNow.getTime())/1000);
        var minutes = Math.floor(seconds/60);
        var hours = Math.floor(minutes/60);

        const secondsStr = (seconds % 60).toString().length === 1 ? '0' + (seconds % 60) : (seconds % 60);
        const minutesStr = (minutes % 60).toString().length === 1 ? '0' + (minutes % 60) : (minutes % 60);
        const hoursStr = (hours % 24).toString().length === 1 ? '0' + (hours % 24) : (hours % 24);

        if(seconds >= 0) {
            this.target.innerText = `${hoursStr}:${minutesStr}:${secondsStr}`;
        } else {
            this.target.innerText = '00:00:00';
        }


        if(seconds <= 0) {
            this.callBack();
            window.clearInterval(this.interval)
        }
    }

    start(callBack : Function) : void {
        this.callBack = callBack
        this.interval = window.setInterval(() => {
            this.setTime()
        },1000)
    }
}