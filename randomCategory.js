import categories from "./categories.js";
import getRandomInt from "./getRandomInt.js";


const randomCategory = () => {
    return categories[getRandomInt(0, 9)].id
}

export default randomCategory