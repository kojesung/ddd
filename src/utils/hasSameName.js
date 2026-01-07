export const hasSameName = (list) => {
    return new Set(list).size !== list.length;
};
