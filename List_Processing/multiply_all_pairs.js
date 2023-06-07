/**
 * Write a function that takes two array arguments, each containing a list of
 * numbers, and returns a new array containing the products of all combinations
 * of number pairs that exist between the two arrays. The returned array should
 * be sorted in ascending numerical order.
 *
 * You may assume that neither argument will be an empty array.
 *
 *
 * Problem:
 * Given two arrays containing numbers, return a new array containing the
 * products of all combinations of number pairs from each of the two arrays.
 * New array should be listed in ascending numerical order.
 *
 * Input: Two arrays
 * Output: Array
 *
 * Rules:
 * - Returned array must be sorted in ascending numerical order
 * - Returned array is new array
 * - Input arrays will never be empty
 *
 *
 * Example given below
 *
 *
 * Data Structure:
 * - Array
 *
 *
 * Algorithm:
 * - Declare a new variable and initialize it to an empty array
 * - Iterate over the first array
 *   - Iterate over the second array
 *     - Store the product of multiplying current element from outer array and
 *       current element from inner array in new array from step one
 * - Return new array
 */

function compare(elementA, elementB) {
  if (elementA < elementB) {
    return -1;
  } else if (elementA > elementB) {
    return 1;
  } else {
    return 0;
  }
}

function multiplyAllPairs(arr1, arr2) {
  let result = [];

  for (let outerElement of arr1) {
    for (let innerElement of arr2) {
      result.push(outerElement * innerElement);
    }
  }

  return result.sort(compare);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]