/**
 * Write a function that takes a sentence string as an argument and returns that
 * string with every occurrence of a "number word" — 'zero', 'one', 'two',
 * 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its
 * corresponding digit character.
 *
 *
 * Problem:
 * Given a string, return the string with every occurence of a number word
 * converted to its corresponding digit character.
 *
 * Input: String
 * Output: String
 *
 * Rules:
 * - All "number words" are single digits.
 *
 *
 * Examples/Test Cases:
 * - Given below
 *
 *
 * Data Structure:
 * - Array
 *
 *
 * Algorithm:
 * - Create a translation object that holds all number words as keys and the
 *   corresponding number character as values
 * - Split the input on spaces, and iterate
 *   - If word has punctuation, remove punctuation to add later
 *   - If an array of the object keys contains current word
 *     - Return the value for that word from the translation object with
 *       punctuation value (empty string or punctuation) concatenated
 *   - Otherwise, return the word
 * - Join the working array into a string with space delimeters and return
 */

const TRANSLATION = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

// Solution 1
// function wordToDigit(inputString) {
//   let numberWords = Object.keys(TRANSLATION);

//   return inputString.split(' ').map(word => {
//     let punctuation = '';

//     if (word.endsWith('.')) {
//       punctuation = word[word.length - 1];
//       word = word.substring(0, (word.length - 1));
//     }

//     if (numberWords.includes(word)) {
//       return TRANSLATION[word] + punctuation;
//     } else {
//       return word;
//     }
//   }).join(' ');
// }

// Solution 2
function wordToDigit(inputString) {
  Object.keys(TRANSLATION).forEach(word => {
    let regex = new RegExp('\\b' + word + '\\b', 'g');
    inputString = inputString.replace(regex, TRANSLATION[word]);
  });

  return inputString;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."