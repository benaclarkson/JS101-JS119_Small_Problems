/**
 * Write a function that takes two array arguments, each containing a list of
 * numbers, and returns a new array that contains the product of each pair of
 * numbers from the arguments that have the same index. You may assume that the
 * arguments contain the same number of elements.
 *
 *
 * Problem:
 * Given two arrays, return a new array containing the product of multiplying
 * the elements from each array that are at the same index.
 *
 * Input: Two arrays
 * Output: Array
 *
 * Rules:
 * - Both arrays have same number of arguments
 *
 *
 * Example cases given below
 *
 *
 * Data Structure:
 * - Array
 *
 *
 * Algorithm:
 * - Create a new variable that is an empty array
 * - Iterate over first array
 *   - Multiply the current element by the element of the second array at the
 *     same index
 *   - Put this value into the empty array from step 1
 * - Return the array
 */

function multiplyList(arr1, arr2) {
  let result = [];

  arr1.forEach((arr1El, index) => {
    result.push(arr1El * arr2[index]);
  });

  return result;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]