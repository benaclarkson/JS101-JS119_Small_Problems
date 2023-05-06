/**
 * In the previous exercise, you developed a function that converts simple
 * numeric strings to integers. In this exercise, you're going to extend that
 * function to work with signed numbers.
 *
 * Write a function that takes a string of digits and returns the appropriate
 * number as an integer. The string may have a leading + or - sign; if the first
 * character is a +, your function should return a positive number; if it is
 * a -, your function should return a negative number. If there is no sign,
 * return a positive number.
 *
 * You may assume the string will always contain a valid number.
 *
 * You may not use any of the standard conversion methods available in
 * JavaScript, such as parseInt() and Number(). You may, however, use the
 * stringToInteger() function from the previous lesson.
 *
 *
 * Problem:
 * As an extension of the stringToInteger function developed previously, the
 * code should now account for signed integers.
 *
 * Input: String
 * Output: Number
 *
 * Rules:
 * - If leading sign is "+" or nothing, return positive integer
 * - If leading sign is "-", return negative integer
 *
 *
 * Examples given below
 *
 *
 * Data Structure:
 * - Will employ an object
 *
 *
 * Algorithm:
 * - Check first char of string
 *   - If first char is included in the keys of DIGITS or if first char is `'+'`
 *     - Use stringToInteger function to determine number
 *   - If first char is `'-'`
 *     - return the negative version of stringToInteger
 */

function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;

  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));

  return value;
}

function stringToSignedInteger(str) {
  const NUMS = "0123456789";
  let firstChar = str[0];

  if (NUMS.includes(firstChar)) {
    return stringToInteger(str);
  } else if (firstChar === '+') {
    return stringToInteger(str.substring(1));
  } else {
    return -stringToInteger(str.substring(1));
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true