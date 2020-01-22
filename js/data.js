const puppy = "Banjo";

const obj = {
    someNumber: 42,
    whichSideOfTheForce: 'The Dark Side',
    arnie: 'Get to da choppa!',
};

const multiply = (num1, num2) => {
    let sum = 0;
    for (let i = 0; i < num2; i++) {
        sum += num1;
    }
    return sum;
};

const add = (x, y) => x + y;

module.exports = {obj, multiply, puppy, add};
