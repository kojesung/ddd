export const workerValidator = (endWorker, dayWorker) => {
    const total = [...endWorker, ...dayWorker];
    const setSize = new Set(total).size;
    if (setSize > 35) throw new Error('[ERROR] 총 근무자는 35명이 최대입니다.');
};
