/**
 * PROBLEM:
 * In the modern era under the Gregorian Calendar, leap years occur in every
 * year that is evenly divisible by 4, unless the year is also divisible by 100.
 * If the year is evenly divisible by 100, then it is not a leap year, unless
 * the year is also evenly divisible by 400.
 *
 * Assume this rule is valid for any year greater than year 0. Write a function
 * that takes any year greater than 0 as input and returns true if the year is
 * a leap year, or false if it is not a leap year.
 *
 * Input:
 * Integer greater than 0
 *
 * Output:
 * Boolean value
 *
 * Rules:
 * - If input is evenly divisible by 400 and 100, return true.
 * - If input is evenly divisible by 4, but not divisible by 100 return true.
 *
 *
 * EXAMPLES/TEST CASES:
 * See below
 *
 *
 * DATA STRUCTURE:
 * Number data type
 *
 *
 * ALGORITHM:
 * - Declare function that allows for one param, input
 *   - If input % 400 === 0 && input % 100 === 0, return true
 *   - If input % 4 === 0 && input % 100 !== 0, return true
 *   - Else return false
 */

function isLeapYear(input) {
  if (input % 400 === 0 && input % 100 === 0) {
    return true;
  } else if (input % 4 === 0 && input % 100 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true