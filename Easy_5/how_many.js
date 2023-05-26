/**
 * Write a function that counts the number of occurrences of each element in a
 * given array. Once counted, log each element alongside the number of
 * occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").
 *
 *
 * Problem:
 * Given an array of strings, return an object with each string as a key and the
 * frequency of occurences as the value.
 *
 * Input: Array
 * Output: Object
 *
 * Rules:
 * - Case sensitive
 *
 *
 * Example cases given below
 *
 *
 * Data Structures:
 * - Arrays and objects
 *
 *
 * Algorithm:
 * - Create an empty object variable
 * - Iterate over input array
 *   - Check if element is already a key in object
 *     - If so, increase value by 1
 *     - If not, add as new key with value of 1
 * - Pass result to new function, which logs key/value pairs
 */

function countOccurrences(arr) {
  let result = {};

  arr.forEach(el => {
    if (Object.keys(result).includes(el)) {
      result[el] += 1;
    } else {
      result[el] = 1;
    }
  });

  logResult(result);
}

function logResult(result) {
  for (let key in result) {
    console.log(`${key} => ${result[key]}`);
  }
}

let vehicles = [
  'car',
  'car',
  'truck',
  'car',
  'SUV',
  'truck',
  'motorcycle',
  'motorcycle',
  'car',
  'truck'
];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2