/**
 * Write a function that takes an array of strings and returns an array of the
 * same string values, but with all vowels (a, e, i, o, u) removed.
 *
 *
 * Problem:
 * Given an array of strings, return an array of the same string values with all
 * vowels removed.
 *
 * Input: Array
 * Output: Array
 *
 * Rules:
 * - Mutate original array?
 * - Vowels: a, e, i, o, u
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
 * - Declare new variable, vowels, and initialize it to upper & lower of
 *   a, e, i, o, u as regex
 * - Iterate through array
 *   - Replace vowels in every string with empty string
 * - Return array
 */

function removeVowels(words) {
  return words.map(word => {
    return word.replace(/[aeiou]/ig, '');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]