import { MissionUtils } from '@woowacourse/mission-utils';

class OutputView {
    static printWorkerList(workerList) {
        workerList.forEach((worker) =>
            MissionUtils.Console.print(
                `${worker.month}월 ${worker.date}일 ${worker.day}${worker.isPublicHoliday ? '(휴일)' : ''} ${
                    worker.worker
                }`
            )
        );
    }
}

export default OutputView;
