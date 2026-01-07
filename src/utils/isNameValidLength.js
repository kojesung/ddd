import { MAX_WORKER_NAME } from '../constants';

export const isNameValidLength = (name) => {
    return name.length <= MAX_WORKER_NAME;
};
