import { DAY_TO_INDEX } from './constants.js';

class Parser {
    static monthDayParser(input) {
        const trimmed = input.trim();
        if (trimmed === '') throw new Error('[ERROR] 월과 시작 요일을 입력해주세요');
        const [month, day] = trimmed.split(',');
        const parsedMonth = Number(month.trim());
        if (parsedMonth < 1 || parsedMonth > 12) throw new Error('[ERROR] 월의 범위는 1월과 12월 사이로 설정해주세요');
        const dayIndex = DAY_TO_INDEX[day];
        if (!dayIndex) throw new Error('[ERROR] 시작 요일은 일요일 ~ 토요일 사이의 유효한 요일러 설정해주세요');
        return { month: parsedMonth, startDay: dayIndex };
    }
    static weekDayWorkerList() {}
    static weekEndWorkerList() {}
}

export default Parser;
