/**
 * Write a function that takes a string as an argument and returns that string
 * with the first character of every word capitalized and all subsequent
 * characters in lowercase.
 *
 * You may assume that a word is any sequence of non-whitespace characters.
 *
 *
 * Problem:
 * Given a string, return a string containing the same words, but with the first
 * character of each word capitalized.
 *
 * Input: String
 * Output: String
 *
 * Rules:
 * - First character, not first letter
 *
 * Questions:
 * - Empty strings valid?
 * - Validate input as string?
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
 * - Split string into array of words
 * - Iterate over array
 *   - Convert word to all lowercase
 *   - Capitalize first character
 * - Join array into string
 * - Return string
 */

function wordCap(str) {
  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'