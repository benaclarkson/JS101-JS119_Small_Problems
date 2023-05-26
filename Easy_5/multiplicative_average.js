/**
 * Write a function that takes an array of integers as input, multiplies all of
 * the integers together, divides the result by the number of entries in the
 * array, and returns the result as a string with the value rounded to three
 * decimal places.
 *
 *
 * Problem:
 * Given an array of integers, multiply all integers together, then divide the
 * product by the number of entries in the array. Return this result as a string
 * with the value rounded to 3 decimal places.
 *
 * Input: Array of integers
 * Output: String
 *
 * Rules:
 * - All array elements are integers
 * - Returned string must be rounded to 3 decimal places
 *
 * Questions:
 * - Can I mutate the input array?
 *
 *
 * Example cases given below
 *
 *
 * Data Structure:
 * - Employs an array from input
 *
 *
 * Algorithm:
 * - Iterate over input array
 *   - Multiply each element by the previous accumulation/product
 *   - Return that accumulated product and store in variable
 * - Divide result by length of input array
 * - Convert the result to a string rounded to 3 decimal places and return it
 */

function multiplicativeAverage(arr) {
  let result = arr.reduce((acc, curr) => acc * curr);
  result /= arr.length;

  return result.toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"