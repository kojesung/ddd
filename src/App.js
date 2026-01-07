import { inputLoop, workerInputLoop } from './utils/inputLoop.js';
import InputView from './InputView.js';
import Parser from './Parser.js';
import Calendar from './Calendar.js';
import OutputView from './OutputView.js';

class App {
    async run() {
        const { month, startDay } = await inputLoop(InputView.inputMonthDay, Parser.monthDayParser);
        const { weekdayWorker, weekendWorker } = await workerInputLoop(
            InputView.inputWeekDayWorkerList,
            InputView.inputWeekEndWorkerList,
            Parser.workerListParser
        );
        const calendar = new Calendar(month, startDay, weekdayWorker, weekendWorker);
        calendar.setWorker();
        const workerList = calendar.getWorkerList();
        OutputView.printWorkerList(workerList);
    }
}

export default App;
