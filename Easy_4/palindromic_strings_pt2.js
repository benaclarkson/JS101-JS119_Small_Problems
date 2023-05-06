/**
 * Write another function that returns true if the string passed as an argument
 * is a palindrome, or false otherwise. This time, however, your function should
 * be case-insensitive, and should ignore all non-alphanumeric characters. If
 * you wish, you may simplify things by calling the isPalindrome function you
 * wrote in the previous exercise.
 *
 * Problem:
 * - Verify if a string is a palindrome.
 *
 * Input: string
 * Output: Boolean representing if input is a palindrome
 *
 * Rules:
 * - Case-insensitive
 * - Only alphanumeric characters matter
 * - Same forwards and backwards, after removing spaces and non-alpha-numeric
 *   characters
 *
 *
 * Examples below
 *
 *
 * Data structures will be array at one point
 *
 *
 * Algorithm:
 * - Remove whitespace from string input
 * - Remove non-alphanumeric chars from string input
 * - Call isPalindrome using updated string as argument
 */

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function isRealPalindrome(string) {
  string = string.toLowerCase().replace(/[^A-Za-z0-9]/g, '');

  return isPalindrome(string);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false