/**
 * Write a function that takes a string argument and returns true if all of the
 * alphabetic characters inside the string are uppercase; false otherwise.
 * Ignore characters that are not alphabetic.
 *
 *
 * Problem:
 * Given a string, return a boolean based on whether or not all alphabetic chars
 * are uppercase.
 *
 * Input: String
 * Output: Boolean
 *
 * Rules:
 * - Non-alphabetic characters are ignored
 *
 *
 * Examples/Tests:
 * - Given below
 *
 *
 * Data Structure:
 * - Array
 *
 *
 * Algorithm:
 * - Split string into array
 * - Iterate over array
 *   - Determine if every char matches the same char, but uppercase
 *   - Return the result
 */

function isUppercase(str) {
  return str.split('').every(char => char === char.toUpperCase());
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true