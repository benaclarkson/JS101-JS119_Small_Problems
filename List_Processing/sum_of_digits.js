/**
 * Write a function that takes one argument, a positive integer, and returns the
 * sum of its digits. Do this without using for, while, or do...while loops -
 * instead, use a series of method calls to perform the sum.
 *
 * Problem: Given a positive integer, return the sum of the integer's digits.
 *
 * Input: Integer
 * Output: Integer
 *
 * Rules:
 * - Cannot use while or do...while loops
 * - Must use a series of method calls to perform sum
 *
 *
 * Examples given below
 *
 *
 * Data Structure:
 * - Will involve an array at one point
 *
 *
 * Algorithm:
 * - Convert integer to string
 * - Split string into array of chars
 * - Iterate over each char
 *   - Convert each char to a number and add to total
 * - Return total
 */

function sum(num) {
  return String(num).split('').reduce((curr, acc) => +curr + +acc);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45