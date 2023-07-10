/**
 * The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...)
 * such that the first two numbers are 1 by definition, and each subsequent
 * number is the sum of the two previous numbers. Fibonacci numbers often appear
 * in mathematics and nature.
 *
 * Computationally, the Fibonacci series is a simple series, but the results
 * grow at an incredibly rapid rate. For example, the 100th Fibonacci number is
 * 354,224,848,179,261,915,075—that's enormous, especially considering that it
 * takes six iterations just to find the first 2-digit Fibonacci number.
 *
 * Write a function that calculates and returns the index of the first Fibonacci
 * number that has the number of digits specified by the argument. (The first
 * Fibonacci number has an index of 1.)
 *
 * You may assume that the argument is always an integer greater than or equal
 * to 2.
 *
 *
 * Problem:
 * Given a number, digits, return the number of iterations it would take to
 * arrive at a number in the fib squence which contains digits number of digits
 *
 * Input: Number
 * Output: Number
 *
 *
 * Examples/Test Cases:
 * - Given below
 *
 *
 * Data Structure:
 * - Array
 *
 *
 * Algorithm:
 * - Initialize a count variable and set it equal to 0
 * - Given an array that contains [1, 1], continue to add the next fibonacci
 *   number in the squence
 * - Upon each iteration
 *   - Add 1 to the count
 *   - Convert the number to a string and check the length
 *     of that string.
 *   - If the length of that string is equal to the digits variable, return the
 *     value of the count variable
 *
 * Fib Function:
 * Input: Array of numbers
 * Output: Array of numbers with the next fib number appended to the end
 *
 * Algorithm:
 * - Given an array, sum the values at array length - 1 and array length - 2
 * - Add that value to the array
 * - Return the array
 */

function addNextFibonacciNumber(nums) {
  let nextFib = BigInt(nums[nums.length - 2] + nums[nums.length - 1]);
  nums.push(nextFib);
}

function findFibonacciIndexByLength(len) {
  let count = 2n;
  let fibNums = [1n, 1n];
  while ((String(fibNums[fibNums.length - 1]).length) < len) {
    addNextFibonacciNumber(fibNums);
    count += 1n;
  }

  return count;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.