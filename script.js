let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));
let operator = prompt("Enter the operator (+, -, *, /): ");

let result;

switch (operator) {
  case "+" :
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    result = "Invalid operator";
    break;
}

alert("The result is: " + result);
