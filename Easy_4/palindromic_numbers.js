/**
 * Write a function that returns true if its integer argument is palindromic, or
 * false otherwise. A palindromic number reads the same forwards and backwards.
 *
 * Problem:
 * Return a Boolean value based on whether or not the input number is
 * palindromic.
 *
 * Input: number
 * Output: Boolean
 *
 * Rules:
 * - Palindromic numbers read the same forwards and backwards
 *
 * Question:
 * - Is input ever less than 0?
 *
 *
 * Examples below
 *
 *
 * Data structure: Array
 *
 *
 * Algorithm:
 * - Convert input to string
 *   - Convert string to array of chars
 *     - Reverse array
 *     - Join back together
 *     - Convert to number
 * - Return result of comparing original and reversed numbers
 */

function isPalindromicNumber(num) {
  let reversedNum = +(num.toString().split('').reverse().join(''));
  console.log(reversedNum);

  return num === reversedNum;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(000050000));            // true