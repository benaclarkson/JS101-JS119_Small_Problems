/**
 * Write a function that returns true if the string passed as an argument is a
 * palindrome, or false otherwise. A palindrome reads the same forwards and
 * backwards. For this problem, the case matters and all characters matter.
 *
 * Problem:
 * - Check if input string is palindrome.
 *
 * Rules:
 * - Case-sensitive
 * - All characters matter
 * - Spaces are ignored
 *
 * Examples below
 *
 *
 * Data structure will be array at one point
 *
 *
 * Algorithm:
 * - Compare input string with input string reversed
 *   - If the same, return true
 *   - If not, return false
 */

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true