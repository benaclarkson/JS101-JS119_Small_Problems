/**
 * Write a function that takes a string argument containing one or more words
 * and returns a new string containing the words from the string argument. All
 * five-or-more letter words should have their letters in reverse order. The
 * string argument will consist of only letters and spaces. Words will be
 * separated by a single space.
 *
 *
 * Problem:
 * Given a string, return a new string where all words with 5 or more letters
 * have their letters reversed.
 *
 * Input: String
 * Output: String
 *
 * Rules:
 * - All input will consist only of letters and spaces
 * - All words are separated by single space
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
 * - Split input string on spaces and store in variable
 * - Iterate through each string
 * - If string length is greater than 5
 *   - Split string
 *     - Reverse chars
 *     - Join chars
 *   - Ensure this replaces the old string
 * - Join strings back together with space delimiter
 * - Return string
 */

function reverseWords(str) {
  const WORD_LENGTH_MIN = 5;
  let words = str.split(' ');

  let result = words.map(word => {
    if (word.length >= WORD_LENGTH_MIN) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  });

  return result.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"