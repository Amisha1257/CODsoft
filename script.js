let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;
let secondOperand = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        operator = op;
        currentInput = '';
    } else if (currentInput !== '') {
        calculate();
        operator = op;
        firstOperand = parseFloat(display.value);
        currentInput = '';
    }
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
}
function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    secondOperand = null;
    operator = '';
    display.value = '';
}

function calculate() {
    if (firstOperand !== null && currentInput !== '') {
        secondOperand = parseFloat(currentInput);
        switch (operator) {
            case '+':
                display.value = firstOperand + secondOperand;
                break;
            case '-':
                display.value = firstOperand - secondOperand;
                break;
            case '*':
                display.value = firstOperand * secondOperand;
                break;
            case '/':
                display.value = firstOperand / secondOperand;
                break;
            default:
                display.value = 'Error';
                break;
        }
        currentInput = '';
        firstOperand = null;
        operator = '';
    }
}
