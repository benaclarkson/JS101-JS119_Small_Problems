/**
 * PROBLEM:
 * Write a function that takes a non-empty string argument and returns the
 * middle character(s) of the string. If the string has an odd length, you
 * should return exactly one character. If the string has an even length, you
 * should return exactly two characters.
 *
 * Input:
 * A non-empty string
 *
 * Output:
 * The middle character(s) of the input. One char for odd-length strings. Two
 * chars for even-length strings.
 *
 * Rules:
 *
 *
 *
 * EXAMPLES/TEST CASES:
 * See below
 *
 *
 * DATA STRUCTURE:
 * Array and string data type
 *
 *
 * ALGORITHM:
 * - Declare a function centerOf(str)
 *   - Split the string on each character
 *   - If array length is even
 *     - Get start index for slice
 *     - Get end index for slice
 *     - return chars.slice(start, end).join('');
 *   - Otherwise
 *     - return chars[Math.floor(chars.length / 2)];
 */

function centerOf(str) {
  let chars = str.split('');

  if (chars.length % 2 === 0) {
    let start = Math.floor(chars.length / 2) - 1;
    let end = Math.floor(chars.length / 2) + 1;
    return chars.slice(start, end).join('');
  } else {
    return chars[Math.floor(chars.length / 2)];
  }
}

console.log(centerOf('I Love JavaScript') === 'a'); // "a"
console.log(centerOf('Launch School') === ' ');     // " "
console.log(centerOf('Launch') === 'un');            // "un"
console.log(centerOf('Launchschool') === 'hs');      // "hs"
console.log(centerOf('x') === 'x');                 // "x"