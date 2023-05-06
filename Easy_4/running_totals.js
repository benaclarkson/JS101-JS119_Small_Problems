/**
 * Write a function that takes an array of numbers and returns an array with the
 * same number of elements, but with each element's value being the running
 * total from the original array.
 *
 * Problem:
 * Given an array of numbers, return an array with same number of elements, but
 * each element if value of running total from each iteration.
 *
 * Input: Array of numbers
 * Output: Array of numbers
 *
 * Questions:
 * - Return same array object, but mutated? OR New array?
 *
 *
 * Examples below
 *
 *
 * Data Structure: Array
 *
 *
 * Algorithm:
 * - Iterate over each element in array and calc running total, then return the
 *   new array
 */

function runningTotal(arr) {
  let currentTotal = 0;

  return arr.map(num => {
    currentTotal += num;

    return currentTotal;
  });
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []