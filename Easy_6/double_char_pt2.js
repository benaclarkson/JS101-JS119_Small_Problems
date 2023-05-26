/**
 * Write a function that takes a string, doubles every consonant character in
 * the string, and returns the result as a new string. The function should not
 * double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.
 *
 *
 * Problem:
 * Given a string, return the same string with all consonants doubled.
 *
 * Input: String
 * Output: String
 *
 * Rules:
 * - Only double consonants
 * - Do not double vowels (a, e, i, o, u), digits, punctuation, or whitespace
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
 * - Create variable to hold all consonants
 * - Convert string to array
 * - Iterate though array
 * - If consonants variable contains element, double it
 * - If not, continue on
 * - Return array converted to string
 */

function doubleConsonants(str) {
  const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n',
    'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

  return str.split('').map(el => {
    if (CONSONANTS.includes(el.toLowerCase())) {
      return el.repeat(2);
    } else {
      return el;
    }
  }).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""