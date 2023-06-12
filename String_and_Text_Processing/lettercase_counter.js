/**
 * Write a function that takes a string and returns an object containing three
 * properties: one representing the number of characters in the string that are
 * lowercase letters, one representing the number of characters that are
 * uppercase letters, and one representing the number of characters that are
 * neither.
 *
 *
 * Problem:
 * Given a string, return an object containing 3 properties, one to track
 * lowercase chars, one to track uppercase chars, and one to track chars that
 * are neither.
 *
 * Input: String
 * Output: Object
 *
 *
 * Examples/Tests:
 * - Given below
 *
 *
 * Data Structure:
 * - Object
 *
 *
 * Algorithm:
 * - Declare a new object with 3 properties, each set to 0
 * - Iterate over string
 *   - If char is A-Z
 *     - Increment uppercase
 *   - If char is a-z
 *     - Increment lowercase
 *   - Else
 *     - Incremen neither
 * - Return result
 */

function letterCaseCount(str) {
  let result = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for (let char of str) {
    if (/[A-Z]/.test(char)) {
      result.uppercase += 1;
    } else if (/[a-z]/.test(char)) {
      result.lowercase += 1;
    } else {
      result.neither += 1;
    }
  }

  return result;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }