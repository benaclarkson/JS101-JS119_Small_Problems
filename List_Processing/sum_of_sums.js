/**
 * Write a function that takes an array of numbers and returns the sum of the
 * sums of each leading subsequence in that array. Examine the examples to see
 * what we mean. You may assume that the array always contains at least one
 * number.
 *
 *
 * Problem:
 * Given an array of numbers, return the sum of sums of each leading subsequence
 * in the given array.
 *
 * Input: Array of numbers
 * Output: Integer
 *
 * Rules:
 * - Arrays will always contain at least 1 number
 *
 * Questions:
 * - May I mutate the original array?
 *
 *
 * Examples/Test:
 * - Given below
 *
 *
 * Data Structure:
 * - Array
 *
 *
 * Algorithm:
 * - Declare a new variable, result, and initialize it to 0
 * - Declare a new variable, count, and initialize it to 1
 * - Iterate over array
 *   - Capture the values from 0 to count (excluded)
 *   - Sum those values together
 *   - Add that sum to result
 *   - Increment the count
 * - Return result
 */

function sumOfSums(arr) {
  let result = 0;

  for (let count = 1; count <= arr.length; count += 1) {
    result += arr.slice(0, count).reduce((acc, num) => acc + num);
  }

  return result;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35