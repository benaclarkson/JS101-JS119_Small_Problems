/**
 * In the previous two exercises, you developed functions that convert simple
 * numeric strings to signed integers. In this exercise and the next, you're
 * going to reverse those functions.
 *
 * Write a function that converts a non-negative integer value
 * (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.
 *
 * You may not use any of the standard conversion functions available in
 * JavaScript, such as String(), Number.prototype.toString, or an expression
 * such as '' + number. Your function should do this the old-fashioned way and
 * construct the string by analyzing and manipulating the number.
 *
 *
 * Problem:
 * Given an integer as input, return the string representation of said number,
 * without using any built-in conversion functions such as String(),
 * Number.prototype.toString(), or "" + number.
 *
 * Input: Number
 * Output: String
 *
 * Rules:
 * - No use of built-in conversion methods
 * - Account for 0 as valid input
 *
 * Questions:
 * - Account for negative input?
 *
 *
 * Examples given below
 *
 *
 * Data Structure:
 * - Take advantage of index/element key/value association in array and covert
 *   through bracket notation
 *
 *
 * Algorithm:
 * - 
 */

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"