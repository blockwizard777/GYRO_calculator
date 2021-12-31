import fromExponential from "from-exponential";

export const trim = (number , precision ) => {
    const array = fromExponential(number).split(".");
    if (array.length === 1) return fromExponential(number);
    array.push(array.pop().substring(0, precision));
    const trimmedNumber = array.join(".");
    return trimmedNumber;
};
