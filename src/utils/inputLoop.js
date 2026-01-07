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
