import { inputLoop } from './utils/inputLoop';
import InputView from './InputView';
import Parser from './Parser';

class App {
    async run() {
        const { month, day } = await inputLoop(InputView.inputMonthDay, Parser.monthDayParser);
    }
}

export default App;
