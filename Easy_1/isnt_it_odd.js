/**
 * PROBLEM:
 * Write a function that takes one integer argument, which may be positive,
 * negative, or zero. This method returns true if the number's absolute value is
 * odd. You may assume that the argument is a valid integer value.
 * 
 * Input:
 * A valid integer -- positive, negative, or zero
 * 
 * Output:
 * Return true if the number's absolute value is odd.
 * 
 * Rules:
 * 
 * 
 * Questions:
 * - Return false if the number's absolute value is even? Assume yes, based
 *   on provided test cases.
 * - Can use built-in functions to determine absolute value?
 * 
 * 
 * EXAMPLES/TEST CASES:
 * Provided
 * 
 * 
 * DATA STRUCTURE:
 * Input is valid integer, AKA Number.
 * The argument used within the function will be a Number.
 * The return value will be a Boolean.
 * 
 * 
 * ALGORITHM:
 * ** Solution without using `Math.abs()` method **
 * - Declare a function, `isOdd`, which allows for one parameter, `num`.
 * - Initialize new variable, `absValue` and set it equal to 0.
 * - Determine if `num` is greater than 0
 *   - If greater, set value of `absValue` to that of `num`.
 *   - If less than, set value of `absValue` to that of `0 - num`.
 * - return absValue % 2 !== 0
 */

function isOdd(num) {
  let absValue = 0;

  if (num > 0) {
    absValue = num;
  } else {
    absValue = 0 - num;
  }

  return absValue % 2 !== 0;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true