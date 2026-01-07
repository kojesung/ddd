import { MAX_WORKER_NAME } from '../constants.js';

export const isNameValidLength = (name) => {
    return name.length <= MAX_WORKER_NAME;
};
