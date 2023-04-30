
let num1 = pass;
let num2 = pass;
let operator = pass;


const add = function (num1, num2) {
    result = num1 + num2;
    return result;
};

const subtract = function (num1, num2) {
    result = num1 - num2;
    return result;
};

const multiply = function (num1, num2) {
    result = num1 * num2;
    return result;
};

const divide = function (num1, num2) {
    result = num1 / num2;
    return result;
};


const operate = function (operator, num1, num2) {
    if (operator === '+'){
        add(num1, num2);
    }
    else if (operator === '-'){
        subtract(num1, num2);
    }
    else if (operator === '*'){
        multiply(num1, num2);
    }
    else if (operator === '/'){
        divide(num1, num2);
    }
};