const calcSum = (first, second) => first + second;
const calcDifference = (first, second) => first - second;
const calcMultiplication = (first, second) => first * second;
const calcDivision = (first, second) => first / second;

const getResult = function() {
    let firstNumber = prompt('Enter first number');
    let secondNumber = prompt('Enter second number');
    const operation = prompt('Enter operator', '');

    console.log(firstNumber, secondNumber);
    if (isNaN(firstNumber) || firstNumber === null || isNaN(secondNumber) || secondNumber === null) {
        return alert('Incorrect numbers');
    } else {
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
        if (operation === '+') {
            return alert(calcSum(firstNumber, secondNumber));
        } else if (operation === '-') {
            return alert(calcDifference(firstNumber, secondNumber));
        } else if (operation === '*') {
            return alert(calcMultiplication(firstNumber, secondNumber));
        } else if (operation === '/') {
            return alert(calcDivision(firstNumber, secondNumber));
        } else {
            return alert('Incorrect operator');
        }
    }
}

getResult();