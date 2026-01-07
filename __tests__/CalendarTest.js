import Calendar from '../src/Calendar.js';

const month = new Calendar(
    5,
    1,
    ['제성', '하이', '포비'],
    ['수아', '제성', '하이', '포비', '루루', '글로', '솔로스타', '수아', '슬링키']
);
month.setWorker();
describe('Calendar class test', () => {
    test('해당 달의 특정 일을 인자로 전달했을 때 무슨 요일인지 반환하는 메서드', () => {
        const day = month.getDay(5); //5일은 무슨 요일?
        expect(day).toBe(5); // index 5 == 금요일
    });
    test('해당 달의 특정 일을 인자로 전달했을 때 법정 공휴일인지 반환하는 메서드', () => {
        const day = month.isPublicHoliday(5);
        expect(day).toBe(true); // 5/5 어린이날
    });
    test('정리된 전체 근무표를 반환하는 메서드', () => {
        const workerList = month.getWorkerList();
        expect(workerList).toHaveLength(31);
        expect(workerList[0]).toHaveProperty('date');
        expect(workerList[0]).toHaveProperty('day');
        expect(workerList[0]).toHaveProperty('worker');
        expect(workerList[0]).toHaveProperty('isPublicHoliday');
        expect(workerList[0].date).toBe(1);
        expect(workerList[4].isPublicHoliday).toBe(true); // 5일 어린이날
        for (let i = 1; i < workerList.length; i++) {
            expect(workerList[i].worker).not.toBe(workerList[i - 1].worker);
        }
    });
});
