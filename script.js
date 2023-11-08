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
        throw new Error("Error: division by zero");
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
const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');
const decimalBtn = document.getElementById('decimal');
const lastOperation = document.getElementById('operation');

decimalBtn.addEventListener('click', () => appendDecimal());
clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteNumber);


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
function appendDecimal() {
    if (shouldResetScreen) {
        resetScreen();
    }
    if (!screen.textContent.includes('.')) {
        screen.textContent += '.';
    }
}



function resetScreen() {
    screen.textContent = '';
    shouldResetScreen = false;
}

function clear() {
    resetScreen();
    screen.textContent = '0';
    lastOperation.textContent = '';
    numberOne = '';
    numberTwo = '';
    operation = null;
}

function deleteNumber() {
    screen.textContent = screen.textContent.toString().slice(0, -1);
    if (screen.textContent === '') {
        screen.textContent = '0';
    }
}

function setOperation(operator) {
    if (operation !== null) {
        evaluate();
    }

    numberOne = screen.textContent;
    operation = operator.replace('÷', '/').replace('−', '-').replace('×', '*');
    lastOperation.textContent = `${numberOne} ${operation}`;
    shouldResetScreen = true;
}

function evaluate() {
    if (operation === null || shouldResetScreen) return;
    try {
        if (operation === '÷' && screen.textContent === '0') {
            alert("You can't divide by 0!");
            return;
        }

        numberTwo = screen.textContent;
        const result = operate(parseFloat(numberOne), parseFloat(numberTwo), operation);
        lastOperation.textContent = `${numberOne} ${operation} ${numberTwo}`
        screen.textContent = roundResult(result);
        operation = null;
        shouldResetScreen = true;
    } catch (error) {
        alert(error.message);
    }
}


function roundResult(number) {
    return Math.round(number * 1000) / 1000
}




