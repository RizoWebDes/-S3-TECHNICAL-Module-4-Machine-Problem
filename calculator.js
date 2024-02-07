let currentCalculation = '';
let operatorClicked = false;

function appendValue(value) {
    document.getElementById('display').value += value;
    currentCalculation += value;
    operatorClicked = false;
}

function appendOperator(operator) {
    if (!operatorClicked) {
        document.getElementById('display').value += operator;
        currentCalculation += operator;
        operatorClicked = true;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
    currentCalculation = '';
}

function calculateResult() {
    try {
        const result = eval(currentCalculation);
        document.getElementById('display').value = result;
        currentCalculation = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
