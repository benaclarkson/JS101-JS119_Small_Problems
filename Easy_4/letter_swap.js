/**
 * Given a string of words separated by spaces, write a function that swaps the
 * first and last letters of every word.
 *
 * You may assume that every word contains at least one letter, and that the
 * string will always contain at least one word. You may also assume that each
 * string contains nothing but words and spaces, and that there are no leading,
 * trailing, or repeated spaces.
 *
 * Problem:
 * Given a sring of words delimited by spaces, write a function that swaps the
 * first and last letters of every word.
 *
 * Input: String
 * Output: String
 *
 * Rules:
 * - Words are delimited by spaces
 * - Every word in sentence contains at least one letter
 * - String will always contain at least one wrod
 * - There will be no leading, trailing, or repeated spaces
 *
 *
 * Examples given below
 *
 *
 * Data Structure:
 * - Will maybe use array to keep track of letters in word
 *
 *
 * Algorithm:
 * - Split string into words on each space and store result in variable
 * - Iterate through each word
 *   - Return the word with first and last lettters swapped
 * - Join array together into full string
 * - Return string
 */

function swap(str) {
  let strArr = str.split(' ');

  return strArr.map(word => {
    if (word.length < 2) {
      return word;
    } else {
      return word[word.length - 1] +
             word.slice(1, -1) +
             word[0];
    }
  }).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"