/**
 * Write a function that takes a string consisting of zero or more space
 * separated words and returns an object that shows the number of words of
 * different sizes.
 *
 * Words consist of any sequence of non-space characters.
 *
 * Problem:
 * Given a string of zero or more words, separated by spaces, return an object
 * consisting of word lengths as keys and word length frequency as corresponding
 * values.
 *
 * Input: String of words, separated by spaces
 * Output: Object consisting of word lengths and word length frequency as key,
 * value pairs.
 *
 * Rules:
 * - String will have 0 or more words
 * - Words are delimited by spaces
 *
 *
 * Examples given below
 *
 *
 * Data structure will be object
 *
 *
 * Algorithm:
 * - Create empty object
 * - Split input string into array -- split based on spaces
 *   - Store in variable
 * - Iterate over the array
 *   - Check if length of current element is already a key in object
 *   - If it is, increment the value by 1
 *   - If not, create a new key value pair
 * - Return the object
 */

function wordSizes(str) {
  let result = {};
  if (str === '') return result;

  let arr = str.split(' ');

  arr.forEach(word => {
    if (Object.keys(result).includes(word.length.toString())) {
      result[word.length] += 1;
    } else {
      result[word.length] = 1;
    }
  });

  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}