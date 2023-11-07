function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    if(b === 0){
        return "Error: division by zero";
    }
    return a/b;
}

function operate(numOne, numTwo, op){
    switch (op){
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
const numbers = document.querySelector('.num');



