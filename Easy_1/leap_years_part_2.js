/**
 * PROBLEM:
 * This is a continuation of the previous exercise.
 *
 * The British Empire adopted the Gregorian Calendar in 1752, which was a leap
 * year. Prior to 1752, they used the Julian Calendar. Under the Julian
 * Calendar, leap years occur in any year that is evenly divisible by 4.
 *
 * Using this information, update the function from the previous exercise to
 * determine leap years both before and after 1752.
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

let GREGORIAN_IMPLEMENTATION = 1752;

function isLeapYear(input) {
  if (input < GREGORIAN_IMPLEMENTATION && input % 4 === 0) {
    return true;
  } else if (input % 400 === 0 && input % 100 === 0) {
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
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true