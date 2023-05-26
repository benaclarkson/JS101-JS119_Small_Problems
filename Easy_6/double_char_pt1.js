/**
 * Write a function that takes a string, doubles every character in the string,
 * and returns the result as a new string.
 *
 *
 * Problem:
 * Given a string, double every character in string and return new string.
 *
 * Input: String
 * Output: String
 *
 * Rules:
 * - Spaces count as chars
 *
 *
 * Example cases given below
 *
 *
 * Data Structure:
 * Array
 *
 *
 * Algorithm:
 * - Split input into array
 * - Iterate over array
 *   - Return char repeated twice
 * - Return array and convert to string
 */

function repeater(str) {
  if (str === '') return '';

  return str.split('').map(char => char.repeat(2)).join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""