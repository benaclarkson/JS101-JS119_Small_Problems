/**
 * PROBLEM:
 * Write a function that returns the next to last word in the String passed to
 * it as an argument.
 *
 * Words are any sequence of non-blank characters.
 *
 * You may assume that the input String will always contain at least two words.
 *
 * Input:
 * String containing at least two words
 *
 * Output:
 * The next to the last word
 *
 * Rules:
 * - Words are any sequence of non-blank characters.
 *
 *
 * EXAMPLES/TEST CASES:
 * See below
 *
 *
 * DATA STRUCTURE:
 * String and array from split string
 *
 *
 * ALGORITHM:
 * - Declare a new function, penultimate, which allows for one parameter
 *   - Declare a new variable and initialize it to the return value of calling
 *     str.split(' ')
 *   - Using bracket notation, return the word at the index of the length of the
 *     array, minus 2.
 */

function penultimate(str) {
  let words = str.split(' ');
  return words[words.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

/**
 * Further Exploration:
 * Suppose we need a function that retrieves the middle word of a
 * phrase/sentence. What edge cases need to be considered? How would you handle
 * those edge cases without ignoring them? Write a function that returns the
 * middle word of a phrase or sentence. It should handle all of the edge cases
 * you thought of.
 *
 * Solution:
 * The following edge cases would need to be considered:
 * - Even number of words (no middle word)
 * - Empty string
 * - String with only 1 word
 */

function middleWord(str) {
  let words = str.split(' ');

  if (words.length % 2 === 0 || str === '') {
    return 'No middle word.';
  } else {
    return words[Math.floor(words.length / 2)];
  }
}

console.log(middleWord('this has a middle word') === 'a');
console.log(middleWord('A middle word') === 'middle');
console.log(middleWord('Some sort of a type of a small word') === 'type');
console.log(middleWord('even number of words') === 'No middle word.');
console.log(middleWord('') === 'No middle word.');