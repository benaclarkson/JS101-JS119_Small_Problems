/**
 * Given an unordered array and the information that exactly one value in the
 * array occurs twice (every other value occurs exactly once), determine which
 * value occurs twice. Write a function that will find and return the duplicate
 * value that is in the array.
 *
 *
 * Problem:
 * Given an array, determine which value occurs twice.
 *
 * Rules:
 * - Given array is unordered
 * - Every value occurs exactly once
 * - One value occurs twice
 *
 * Questions:
 * - Can function mutate the given array?
 *
 *
 * Examples given below
 *
 *
 * Data Structure:
 * - Array
 *
 *
 * Algorithm:
 * **Assuming mutation is allowed
 *   If mutation is not allowed, a simple Array.prototype.slice() call to create
 *   a shallow copy would resolve the issue.
 * - Sort given array
 * - Iterate through given array
 *   - If element to right of current element is same as current element
 *     return current element
 */

function findDup(arr) {
  arr.sort();

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === arr[index + 1]) return arr[index];
  }
}

console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73