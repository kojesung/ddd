describe('Parser class test', () => {
    test('월과 시작 요일을 ","로 구분할 수 있는지 확인한다.', () => {
        expect(() => Parser.monthDayParser('5 화').toThrow('[ERROR]'));
    });
    test('월과 시작 요일을 ","로 구분하여 입력하면 월과 요일을 반환한다.', () => {
        const monthDay = Parser.monthDayParser('5,월');
        expect(monthDay).toEqual({ month: 5, startDay: 1 });
    });
    test('평일 비상 근무 순번에 겹치는 사람이 있으면 에러를 반환한다.', () => {
        expect(() =>
            Parser.weekDayWorkerList('준팍,준팍,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리').toThrow('[ERROR]')
        );
    });
    test('주말 비상 근무 순번에 겹치는 사람이 있으면 에러를 반환한다.', () => {
        expect(() =>
            Parser.weekEndWorkerList('고니,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리').toThrow('[ERROR]')
        );
    });
    test('평일 비상 근무 순번을 ","로 구분하여 겹치는 근무자 없이 입력하면 이름 배열을 반환한다.', () => {
        const weekDayWorkerList = Parser.weekDayWorkerList(
            '준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리'
        );
        expect(weekDayWorkerList).toEqual([
            '준팍',
            '도밥',
            '고니',
            '수아',
            '루루',
            '글로',
            '솔로스타',
            '우코',
            '슬링키',
            '참새',
            '도리',
        ]);
    });
    test('주말 비상 근무 순번을 ","로 구분하여 겹치는 근무자 없이 입력하면 이름 배열을 반환한다.', () => {
        const weekDayWorkerList = Parser.weekEndWorkerList(
            '준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리'
        );
        expect(weekDayWorkerList).toEqual([
            '준팍',
            '도밥',
            '고니',
            '수아',
            '루루',
            '글로',
            '솔로스타',
            '우코',
            '슬링키',
            '참새',
            '도리',
        ]);
    });
});
