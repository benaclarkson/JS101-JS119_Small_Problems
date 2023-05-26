/**
 * Write a function that takes a positive integer as an argument and returns
 * that number with its digits reversed.
 *
 *
 * Problem:
 * Given an integer, return that number reversed.
 *
 * Input: Integer
 * Output: Integer
 *
 * Rules:
 * - Leading zeros get dropped
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
 * - Convert integer to string
 * - Split string into array
 * - Reverse array
 * - Convert to string
 * - Convert to number
 * - Return number
 */

function reverseNumber(num) {
  return Number(String(num).split('').reverse().join(''));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1