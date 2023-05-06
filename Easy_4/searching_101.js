/**
 * Write a program that solicits six numbers from the user and logs a message
 * that describes whether the sixth number appears among the first five numbers.
 *
 * Examples:
 * Enter the 1st number: 25
 * Enter the 2nd number: 15
 * Enter the 3rd number: 20
 * Enter the 4th number: 17
 * Enter the 5th number: 23
 * Enter the last number: 17
 *
 * The number 17 appears in 25,15,20,17,23.
 *
 * -----
 *
 * Enter the 1st number: 25
 * Enter the 2nd number: 15
 * Enter the 3rd number: 20
 * Enter the 4th number: 17
 * Enter the 5th number: 23
 * Enter the last number: 18
 *
 * The number 18 does not appear in 25,15,20,17,23.
 *
 *
 * Problem:
 * Ask user for 6 numbers and output to user if 6th number appears among the
 * first 5 numbers.
 *
 * Input: 6 strings from user, representing 6 numbers
 * Output: String telling user if 6th number appears in first 5 numbers given
 *
 * Questions:
 * - Can users input negative numbers?
 * - Can users input 0?
 * - Can users input Infinity or -Infinity?
 * - Can users input decimals?
 *   - If so, how many decimal places to account for?
 *   - Should rounding occur?
 *
 *
 * Examples given above
 *
 *
 * Data Structure:
 * - Store numbers given by user in array
 *
 *
 * Algorithm:
 * - Create a new variable and set it to an empty array
 * - Create collection of '1st', '2nd', '3rd' etc.
 *   - Iterate through collection, asking user for number and using each string
 *     to change the question each time.
 *   - On each iteration, store the answer from user, converted to a number,
 *     in the empty array
 * - Ask user for last number and store that value, as a number, in a variable
 * - Check if array of numbers contains last number
 *   - If so, tell the user so
 *   - If not, tell the user so
 */

const READLINE = require('readline-sync');

const QUESTIONS = ['1st', '2nd', '3rd', '4th', '5th'];
let nums = [];

QUESTIONS.forEach(question => {
  nums.push(+(READLINE.question(`Enter the ${question} number: `)));
});

let lastNumber = +(READLINE.question('Enter the last number: '));

if (nums.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${nums.join(',')}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${nums.join(',')}.`);
}

// Further Exploration
function isIncluded(arr, val) {
  arr.some((el, val) => {
    return el > val;
  });

  return false;
}