import getRandomInt from "./getRandomInt.js";
const randomDate = () => {
    const date = new Date()
    const year = getRandomInt(1950, 2003)
    const month = getRandomInt(0, 12);
    const day = getRandomInt(0, 28)
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(day);
    return date
}

export default randomDate;

