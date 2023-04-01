/**
 * PROBLEM:
 * Create a function that takes two arguments, multiplies them together, and
 * returns the result.
 *
 * Input:
 * Two integers
 *
 * Output:
 * The result of mutliplying both numbers together
 *
 *
 * EXAMPLES/TEST CASES:
 * See below
 *
 *
 * DATA STRUCTURE:
 * Number data type
 *
 *
 * ALGORITHM:
 * - Declare a function, multiply, which allows for two parameters, num1, num2
 *   - return num1 * num2
 */

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(5, 3) === 15); // logs true
console.log(multiply(2, 3) === 6); // logs true
console.log(multiply(5, 9) === 45); // logs true