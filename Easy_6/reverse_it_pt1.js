/**
 * Write a function that takes a string argument and returns a new string
 * containing the words from the string argument in reverse order.
 *
 * Problem:
 * Given a string, return a new string with the words in reverse order.
 *
 * Input: String
 * Output: String
 *
 *
 * Examples given below
 *
 *
 * Data Structure:
 * - Array
 *
 *
 * Algorithm:
 * - Split input string on spaces
 *   - Reverse the split
 *   - Join the split back together with spaces as delimiter
 */

function reverseSentence(str) {
  return str.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"