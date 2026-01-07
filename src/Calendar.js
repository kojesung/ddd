import { END_OF_MONTH, INDEX_TO_DAY, PUBLIC_HOLIDAY } from './constants.js';

class Calendar {
    constructor(month, dayIndex, weekdayWorkerList, weekendWorkerList) {
        this.month = month;
        this.dayIndex = dayIndex;
        this.weekdayWorkerList = weekdayWorkerList;
        this.weekendWorkerList = weekendWorkerList;
        this.workerList = [];
    }

    isPublicHoliday(date) {
        return PUBLIC_HOLIDAY.some(
            (publicHoliday) => publicHoliday.date === date && publicHoliday.month === this.month
        );
    }

    getDay(date) {
        return (this.dayIndex + (date - 1)) % 7;
    }

    isWeekend(date) {
        const day = this.getDay(date);
        return day === 6 || day === 0;
    }

    setWorker() {
        let weekdayIndex = 0;
        let weekendIndex = 0;
        for (let i = 1; i < END_OF_MONTH[this.month] + 1; i++) {
            if (this.isWeekend(i) || this.isPublicHoliday(i)) {
                this.workerList.push(this.weekendWorkerList[weekendIndex % this.weekendWorkerList.length]);
                weekendIndex += 1;
            } else {
                this.workerList.push(this.weekdayWorkerList[weekdayIndex % this.weekdayWorkerList.length]);
                weekdayIndex += 1;
            }
        }
        this.arrangeWorker();
    }

    arrangeWorker() {
        for (let i = 0; i < this.workerList.length; i++) {
            if (this.workerList[i] === this.workerList[i - 1]) {
                const workerName = this.workerList[i];
                const today = i + 1;
                const isHoliday = this.isPublicHoliday(today) || this.isWeekend(today);
                const index = isHoliday
                    ? this.weekendWorkerList.indexOf(workerName)
                    : this.weekdayWorkerList.indexOf(workerName);
                this.workerList[i] = isHoliday
                    ? this.weekendWorkerList[(index + 1) % this.weekendWorkerList.length]
                    : this.weekdayWorkerList[(index + 1) % this.weekdayWorkerList.length];
            }
        }
    }

    getWorkerList() {
        let returnResult = [];
        for (let i = 0; i < this.workerList.length; i++) {
            const date = i + 1;
            const day = INDEX_TO_DAY[this.getDay(date)];
            const worker = this.workerList[i];
            const isPublicHoliday = this.isPublicHoliday(date);
            returnResult.push({ month: this.month, date, day, worker, isPublicHoliday });
        }
        return returnResult;
    }
}
export default Calendar;
