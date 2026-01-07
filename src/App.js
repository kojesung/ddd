import { inputLoop, workerInputLoop } from './utils/inputLoop';
import InputView from './InputView';
import Parser from './Parser';

class App {
    async run() {
        const { month, day } = await inputLoop(InputView.inputMonthDay, Parser.monthDayParser);
        const { weekdayWorker, weekendWorker } = workerInputLoop(
            InputView.inputWeekDayWorkerList,
            InputView.inputWeekEndWorkerList,
            Parser.workerListParser
        );
    }
}

export default App;
