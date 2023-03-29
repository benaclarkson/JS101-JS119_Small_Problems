/**
 * PROBLEM:
 * Log all odd numbers from 1 to 99, inclusive, to the console, with each number
 * on a separate line.
 * 
 * Input:
 * None
 * 
 * Output:
 * The odd numbers between 1-99, inclusive, logged to the console.
 * Return value of `undefined`
 * 
 * 
 * ALGORITHM:
 * - Initialize a variable, `num`, and set it to 1
 * - Declare a `while` loop
 *   while num < 100
 *     if num % 2 !== 0
 *       console.log(num);
 *     num += 2; 
 */

let num = 1;

while (num < 100) {
  if (num % 2 !== 0) {
    console.log(num);
  }

  num += 2;
}


/**
 * Further Exploration, Part 1
 * PROBLEM:
 * Log all odd numbers from 1 to 99, inclusive, to the console, with each number
 * on a separate line.
 * 
 * Input:
 * None
 * 
 * Output:
 * The odd numbers between 1-99, inclusive, logged to the console.
 * Return value of `undefined`
 * 
 * 
 * ALGORITHM:
 * - Declare a `for` loop
 *   - Set initialization to `n = 1`
 *   - Set the condition to `n < 100`
 *   - Set increment to `n += 2`
 * - Upon each iteration, log `n`
 */

for (let n = 1; n < 100; n += 2) {
  console.log(n);
}


/**
 * Further Exploration, Part 1
 * PROBLEM:
 * Log all odd numbers from 1 to 99, inclusive, to the console, with each number
 * on a separate line.
 * 
 * Input:
 * None
 * 
 * Output:
 * The odd numbers between 1-99, inclusive, logged to the console.
 * Return value of `undefined`
 * 
 * 
 * ALGORITHM:
 * - Using `'readline-sync'` requirement, request a number from user.
 * - Declare a `for` loop
 *   - Set initialization to `inc = 1`
 *   - Set the condition to `inc <= userNum`
 *   - Set increment to `inc += 2`
 * - Upon each iteration, log `inc`
 */

let rlSync = require('readline-sync')
let userNum = Number(rlSync.question('Please provide a positive integer: '));

for (let inc = 1; inc <= userNum; inc += 2) {
  console.log(inc);
}