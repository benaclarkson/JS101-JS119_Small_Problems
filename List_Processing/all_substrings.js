/**
 * Write a function that returns a list of all substrings of a string. Order the
 * returned list by where in the string the substring begins. This means that
 * all substrings that start at index position 0 should come first, then all
 * substrings that start at index position 1, and so on. Since multiple
 * substrings will occur at each position, return the substrings at a given
 * index from shortest to longest.
 *
 * You may (and should) use the leadingSubstrings function you wrote in the
 * previous exercise.
 *
 *
 * Problem:
 * Given a string, return an array containing all substrings of original string,
 * sorted by index of first letter in substring.
 *
 * Input: String
 * Output: Array
 *
 * Rules:
 * - May use leadingSubstrings function from previous exercise
 * - Array of substrings must be sorted by where in the original string, the
 *   substring begins
 * - Substrings starting from the same index should be sorted from shortest to
 *   longest
 *
 *
 * Example given below
 *
 *
 * Data Structure:
 * - Array
 *
 *
 * Algorithm:
 * - Declare new variable, result, and initialize its value to []
 * - Iterate over input string
 *   - Push to result the return value from invoking the leadingSustrings() func
 *     with the corresponding substring as an argument
 * - Flatten result to be an array of strings and return it
 */

function leadingSubstrings(str) {
  let result = str.split('').map((_, idx) => {
    return str.substring(0, idx + 1);
  });

  return result;
}

function substrings(str) {
  let result = [];

  for (let idx = 0; idx < str.length; idx += 1) {
    result = result.concat(leadingSubstrings(str.substring(idx)));
  }

  return result.flat();
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]