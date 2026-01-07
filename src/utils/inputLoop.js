import { MissionUtils } from '@woowacourse/mission-utils';

export const inputLoop = async (inputFn, validator) => {
    while (true) {
        try {
            const input = await inputFn();
            return validator(input);
        } catch (err) {
            MissionUtils.Console.print(err.message);
        }
    }
};

export const workerInputLoop = async (weekDayInputFn, weekEndInputFn, validator) => {
    while (true) {
        try {
            const weekday = await weekDayInputFn();
            const weekend = await weekEndInputFn();
            const parsedWeekday = validator(weekday);
            const parsedWeekend = validator(weekend);
            return { weekdayWorker: parsedWeekday, weekendWorker: parsedWeekend };
        } catch (err) {
            MissionUtils.Console.print(err.message);
        }
    }
};
