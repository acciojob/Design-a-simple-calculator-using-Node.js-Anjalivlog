// Calculator program in Node.js

// Function to perform addition
function add(num1, num2) {
  // TODO: Perform addition operation here 
  return num1 + num2;
}

// Function to perform subtraction
function subtract(num1, num2) {
  // TODO: Perform subtraction operation here
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}

// Function to perform multiplication
function multiply(num1, num2) {
  // TODO: Perform multiplication operation here
  return num1 * num2;
}

// Function to perform division
function divide(num1, num2) {
  // TODO: Perform division operation here
  if (num2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return num1 / num2;

}

// Main program
function calculator(num1, num2, operation) {
  // TODO: Get user input for numbers and operation
  // TODO: Call the appropriate function based on the operation
  // TODO: Output the result
  switch (operation) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      throw new Error("Invalid operation"); 
  }
}

// Invoke the calculator function to start the program
calculator();
