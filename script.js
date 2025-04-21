// script.js

// Select the display input and all buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let input = ""; // To store the current input

// Add click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (button.id === 'ac') {
      clearDisplay();
    } else if (button.id === 'equals') {
      calculate();
    } else if (button.id === 'square') {
      square();
    } else if (button.id === 'modulo') {
      addOperator('%');
    } else if (value !== null) {
      addToInput(value);
    }
  });
});

// Function to add numbers/operators to input
function addToInput(value) {
  input += value;
  display.value = input;
}

// Function to clear the input and display
function clearDisplay() {
  input = "";
  display.value = "";
}

// Function to evaluate the input
function calculate() {
  try {
    // Evaluate the expression safely
    input = eval(input).toString();
    display.value = input;
  } catch (error) {
    display.value = "Error";
    input = "";
  }
}

// Function to square the current number
function square() {
  try {
    input = (eval(input) ** 2).toString();
    display.value = input;
  } catch (error) {
    display.value = "Error";
    input = "";
  }
}

// Function to add operator
function addOperator(op) {
  input += op;
  display.value = input;
}
