/**
 * Write a function that takes an integer argument and returns an array
 * containing all integers between 1 and the argument (inclusive), in ascending
 * order.
 *
 * You may assume that the argument will always be a positive integer.
 *
 *
 * Problem:
 * Given an integer, return an array containing all integers between 1 and the
 * input (inclusive). Array must be in ascending order.
 *
 * Input: Integer
 * Output: Array of Integers
 *
 * Rules:
 * - Array must contain all integers from 1 to input (inclusive)
 * - Array must be in ascending order
 *
 *
 * Example cases given below
 *
 *
 * Data Structure:
 * - Array
 *
 *
 * Algorithm:
 * - Create an empty array and store it in a variable
 * - Loop while iteration count is less than or equal to input
 *   - On each iteration, add current iteration count to array
 * - Return array
 */

function sequence(num) {
  let result = [];

  for (let count = 1; count <= num; count += 1) {
    result.push(count);
  }

  return result;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]