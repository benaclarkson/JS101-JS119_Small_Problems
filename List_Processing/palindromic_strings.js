/**
 * Write a function that returns a list of all palindromic substrings of a
 * string. That is, each substring must consist of a sequence of characters that
 * reads the same forward and backward. The substrings in the returned list
 * should be sorted by their order of appearance in the input string. Duplicate
 * substrings should be included multiple times.
 *
 * You may (and should) use the substrings function you wrote in the previous
 * exercise.
 *
 * For the purpose of this exercise, you should consider all characters and pay
 * attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA'
 * are not. In addition, assume that single characters are not palindromes.
 *
 *
 * Problem:
 * Given a string, return an array containing all palindromic substrings
 * contained therein.
 *
 * Input: String
 * Output: Array
 *
 * Rules:
 * - May use substrings function from previous exercise
 * - Case-sensitive
 * - Character-sensitive
 * - Single characters are not palindroms
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
 * - Invoke substrings(str) function from previous exercise and store return
 *   value in variable, substrings
 * - Iterate over all strings in the array
 *   - If string length is greater than 1 and same as string reversed, store it
 *     in the result
 * - Return the result
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

function palindromes(str) {
  const MIN_STR_LENGTH = 1;

  let allSubstrings = substrings(str).flat();

  return allSubstrings.filter(sub => {
    if (sub.length > MIN_STR_LENGTH) {
      return sub === sub.split('').reverse().join('');
    } else {
      return false;
    }
  });
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]