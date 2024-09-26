let currentInput = '0';
let operatorInput = null;
let previousInput = '';
let result = 0;

function updateOutput() {
  document.getElementById('output').textContent = currentInput;
}

function clearOutput() {
  currentInput = '0';
  operatorInput = null;
  previousInput = '';
  updateOutput();
}

function appendNumber(number) {
  if (currentInput === '0' && number !== '.') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateOutput();
}

function operator(op) {
  if (operatorInput !== null) {
    calculate();
  }
  previousInput = currentInput;
  operatorInput = op;
  currentInput = '0';
}

function calculate() {
  if (operatorInput === null || previousInput === '') return;
  
  let num1 = parseFloat(previousInput);
  let num2 = parseFloat(currentInput);
  
  if (operatorInput === '+') {
    result = num1 + num2;
  } else if (operatorInput === '-') {
    result = num1 - num2;
  } else if (operatorInput === '*') {
    result = num1 * num2;
  } else if (operatorInput === '/') {
    result = num1 / num2;
  }
  
  currentInput = result.toString();
  operatorInput = null;
  previousInput = '';
  updateOutput();
}

function toggleSign() {
  if (currentInput !== '0') {
    currentInput = currentInput.startsWith('-') ? currentInput.slice(1) : '-' + currentInput;
  }
  updateOutput();
}

function percentage() {
  currentInput = (parseFloat(currentInput) / 100).toString();
  updateOutput();
}