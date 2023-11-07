let numberOne = '';
let numberTwo = '';
let operation = null;
let shouldResetScreen = false



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: division by zero";
    }
    return a / b;
}

function operate(numOne, numTwo, op) {
    switch (op) {
        case '+':
            return add(numOne, numTwo);
        case '-':
            return subtract(numOne, numTwo);
        case '*':
            return multiply(numOne, numTwo);
        case '/':
            return divide(numOne, numTwo);
        default:
            return "Error: invalid operator";
    }
}


const screen = document.getElementById('calculator');
const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operatorBtn');
const equals = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');

equals.addEventListener('click', evaluate);
numbers.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
);

operators.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
);


function appendNumber(number) {
    if (screen.textContent === '0' || shouldResetScreen)
        resetScreen();
    screen.textContent += number;
}

function resetScreen() {
    screen.textContent = '';
    shouldResetScreen = false;
}

function clear() {
    resetScreen();
    screen.textContent = '0';
    numberOne = '';
    numberTwo = '';
    operation = null;
}

function deleteNumber() {
    screen.textContent = screen.textContent.toString().slice(0, -1);
}

function setOperation(operator) {
    if (operation !== null) {
        evaluate();
    }

    numberOne = screen.textContent;
    operation = operator;
    shouldResetScreen = true;
}

function evaluate() {
    if (operation === null || shouldResetScreen) return;
    if (operation === '÷' && screen.textContent === '0') {
        alert("You can't divide by 0!");
        return;
    }

    numberTwo = screen.textContent;
    const result = operate(parseFloat(numberOne), parseFloat(numberTwo), operation);
    screen.textContent = roundResult(result);
    operation = null;
    shouldResetScreen = true;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}




