/**
 * Write a function that takes a string argument and returns a list of
 * substrings of that string. Each substring should begin with the first letter
 * of the word, and the list should be ordered from shortest to longest.
 *
 *
 * Problem:
 * Given a string, return a list of substrings of given string.
 *
 * Input: String
 * Output: Array
 *
 * Rules:
 * - Each substring should begin with first letter of string
 * - Returned list should be ordered from shortest to longest
 *   -- sort((a, b) => a.length - b.length)
 *
 * Questions:
 * - Empty string valid?
 * - Whitespace?
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
 * - Declare a new variable, result, and initialize it to empty array
 * - Iterate over chars in string
 *   - Capture substring from index 0 to current index + 1
 *   - Store captured substring in result array
 * - Sort result based on length of elements
 * - Return result
 */

// function leadingSubstrings(str) {
//   let result = [];

//   for (let idx = 1; idx <= str.length; idx += 1) {
//     result.push(str.substring(0, idx));
//   }

//   return result;
// }

// Further Exploration
function leadingSubstrings(str) {
  let result = str.split('').map((_, idx) => {
    return str.substring(0, idx + 1);
  });

  return result;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]