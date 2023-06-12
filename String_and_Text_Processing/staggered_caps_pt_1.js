/**
 * Write a function that takes a string as an argument and returns that string
 * with a staggered capitalization scheme. Every other character, starting from
 * the first, should be capitalized and should be followed by a lowercase or
 * non-alphabetic character. Non-alphabetic characters should not be changed,
 * but should be counted as characters for determining when to switch between
 * upper and lower case.
 *
 *
 * Problem:
 * Given a string, return a string containing the same characters, but with the
 * cases alternating.
 *
 * Input: String
 * Output: String
 *
 * Rules:
 * - Non-alphabetic characters should not be changed
 * - Non-alphabetic characters count towards alternating sequence
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
 * - Split string on each char into array of chars
 * - Iterate through array
 *   - If char is not alphabetical
 *     - Return char
 *   - If index is even
 *     - Return char uppercase
 *   - If index is odd
 *     - Return char lowercase
 * - Join array into string
 * - Return string
 */

function staggeredCase(str) {
  return str
    .split('')
    .map((char, idx) => {
      if (/[^a-z]/i.test(char)) return char;

      if (idx % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"