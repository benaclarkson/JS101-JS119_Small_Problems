/**
 * Write a function that takes a string as an argument and returns that string
 * with every lowercase letter changed to uppercase and every uppercase letter
 * changed to lowercase. Leave all other characters unchanged.
 *
 *
 * Problem:
 * Given a string, return a string with each letter's case swapped.
 *
 * Input: String
 * Output: String
 *
 * Rules:
 * - Ignore non-alphabetic characters
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
 * - Split string into chars
 * - Iterate over chars
 *   - If char is non-alphabetic, return char
 *   - If char is uppercase, return lowercase
 *   - If char is lowercase, return uppercase
 * - Join array of new chars into string and return said string
 */

function swapCase(inputStr) {
  return inputStr
    .split('')
    .map(char => {
      if ((/[a-z]/.test(char))) {
        return char.toUpperCase();
      } else if (/[A-Z]/.test(char)) {
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"