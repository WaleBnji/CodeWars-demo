/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output

*/

//My solution
function basicOp(operation, value1, value2) {
  // Code
  //Store the string of operator in a variable
  //using if else loop check the content of the operator and return the value of applying the operator to the two parameters
  const operator = operation;
  if (operator === '+') {
    return value1 + value2;
  } else if (operator === '-') {
    return value1 - value2;
  } else if (operator === '*') {
    return value1 * value2;
  } else {
    return value1 / value2;
  }
}

console.log(basicOp('*', 5, 5));
