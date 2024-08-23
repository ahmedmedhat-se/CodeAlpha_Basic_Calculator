let currentInput = '0';
let operator = '';
let memory = '0';

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    document.getElementById('display').value = currentInput;
}

function operation(op) {
    operator = op;
    memory = currentInput;
    currentInput = '0';
}

function calculate() {
    let result;
    const num1 = parseFloat(memory);
    const num2 = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    document.getElementById('display').value = currentInput;
}
