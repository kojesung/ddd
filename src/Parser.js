import { DAY_TO_INDEX } from './constants.js';
import { hasSameName } from './utils/hasSameName.js';
import { isNameValidLength } from './utils/isNameValidLength.js';

class Parser {
    static monthDayParser(input) {
        const trimmed = input.trim();
        if (trimmed === '') throw new Error('[ERROR] 월과 시작 요일을 입력해주세요');
        const [month, day] = trimmed.split(',').map((element) => element.trim());
        const parsedMonth = Number(month.trim());
        if (parsedMonth < 1 || parsedMonth > 12) throw new Error('[ERROR] 월의 범위는 1월과 12월 사이로 설정해주세요');
        const dayIndex = DAY_TO_INDEX[day];
        if (!dayIndex) throw new Error('[ERROR] 시작 요일은 일요일 ~ 토요일 사이의 유효한 요일로 설정해주세요');
        return { month: parsedMonth, startDay: dayIndex };
    }
    static workerListParser(input) {
        const trimmed = input.trim();
        if (trimmed === '') throw new Error('[ERROR] 근무자를 입력해주세요');
        const workerList = trimmed.split(',').map((name) => name.trim());
        if (hasSameName(workerList)) throw new Error('[ERROR] 근무자는 각 1회 들어갈 수 있습니다.');
        if (workerList.filter((worker) => isNameValidLength(worker)).length !== workerList.length)
            throw new Error('[ERROR] 근무자의 이름은 최대 5글자입니다.');
        return workerList;
    }
}

export default Parser;
