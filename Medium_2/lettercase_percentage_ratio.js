/**
 * Write a function that takes a string and returns an object containing the
 * following three properties:
 *
 * - the percentage of characters in the string that are lowercase letters
 * - the percentage of characters that are uppercase letters
 * - the percentage of characters that are neither
 *
 *  You may assume that the string will always contain at least one character.
 *
 *
 * Problem:
 * Given a string, return an object that computes what percentages of lowercase,
 * uppercase, and chars that are neither.
 *
 * Rules:
 * - Input will always contain at least 1 char
 *
 *
 * Examples/Test Cases:
 * - Given below
 *
 *
 * Data Structure:
 * Object
 *
 *
 * Algorithm:
 * - Declare a new variable and initialize it to an object containing
 *   { lowercase: 0, uppercase: 0, neither: 0 }
 * - Split input string into array of chars
 * - Every time a char is lowercase, add 1 to count of lowercase
 * - Every time a char is uppercase, add 1 to count of uppercase
 * - Every time a char is neither, add 1 to neither
 * - Iterate over object
 *   - Find average of count / input string length
 *     - Fix to 2 decimal points
 */

function averages(percentages, inputString) {
  for (let [letterCase, percentage] of Object.entries(percentages)) {
    percentages[letterCase] = ((percentage / inputString.length) * 100)
      .toFixed(2);
  }

  return percentages;
}

function letterPercentages(inputString) {
  let percentages = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  inputString.split('').forEach(char => {
    if (/[a-z]/.test(char)) {
      percentages["lowercase"] += 1;
    } else if (/[A-Z]/.test(char)) {
      percentages.uppercase += 1;
    } else {
      percentages.neither += 1;
    }
  });

  return averages(percentages, inputString);
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }