/**
 * PROBLEM:
 * Write a function that takes a string argument and returns a new string that
 * contains the value of the original string with all consecutive duplicate
 * characters collapsed into a single character.
 *
 * Input:
 * String
 *
 * Output:
 * New string that contains value of original string but with all consecutive
 * duplicate chars collapsed into single char
 *
 * Rules:
 * - All non-whitespace chars count as chars
 *
 *
 * EXAMPLES/TEST CASES:
 * - See below
 *
 *
 * DATA STRUCTURE:
 * - String data type
 *
 *
 * ALGORITHM:
 * - Look at each char in input
 * - If the current one matches the char before it, skip it
 *   - Otherwise, store it
 * - Return the newly stored chars grouped together as string
 */

function crunch(str) {
  let result = '';

  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === str[idx - 1]) {
      continue;
    } else {
      result += str[idx];
    }
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""