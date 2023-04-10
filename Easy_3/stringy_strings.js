/**
 * PROBLEM:
 * Write a function that takes one argument, a positive integer, and returns a
 * string of alternating '1's and '0's, always starting with a '1'. The length
 * of the string should match the given integer.
 *
 * Input:
 * Positive integer
 *
 * Output:
 * A string of alternating `'1'`s and `'0'`s
 *
 * Rules:
 * Length of string should match the given integer
 *
 *
 * EXAMPLES/TEST CASES:
 * See below
 *
 *
 * DATA STRUCTURE:
 * String data type
 *
 *
 * ALGORITHM:
 * - Create a new var, counter = 1
 * - Create a new var, result = '1'
 * - While counter is less than input, num
 *   - if counter % 2 === 0
 *     - result += '1'
 *   - else
 *     - result += '0'
 *   - counter += 1
 * - return result
 */

function stringy(num) {
  let counter = 1;
  let result = '1';

  while (counter < num) {
    if (counter % 2 === 0) {
      result += '1';
    } else {
      result += '0';
    }

    counter += 1;
  }

  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"