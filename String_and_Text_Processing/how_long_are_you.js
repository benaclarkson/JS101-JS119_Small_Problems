/**
 * Write a function that takes a string as an argument and returns an array that
 * contains every word from the string, with each word followed by a space and
 * the word's length. If the argument is an empty string or if no argument is
 * passed, the function should return an empty array.
 *
 * You may assume that every pair of words in the string will be separated by a
 * single space.
 *
 *
 * Problem:
 * Given a string, return an array containing this string format: 'word length'.
 *
 * Input: String
 * Output: Array
 *
 * Rules:
 * - An empty string should result in empty array
 * - Every word will be separated by single space
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
 * - Declare a new variable, result, and initialize it to empty array
 * - Split input string on spaces
 * - Iterate over array
 *   - Push interpolation of word and word length into result
 * - Return result
 */

// Solution 1
// function wordLengths(str = '') {
//   if (str === '') return [];

//   let result = str.split(' ');
//   return result.map(word => `${word} ${word.length}`);
// }

// Solution 2
function wordLengths(str = '') {
  if (str === '') {
    return [];
  } else if (str.split(' ') === undefined) {
    return [`${str} ${str.length}`];
  } else {
    return str.split(' ').map(word => `${word} ${word.length}`);
  }
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []