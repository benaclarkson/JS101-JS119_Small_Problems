/**
 * Write a function that takes two arrays as arguments and returns an array
 * containing the union of the values from the two. There should be no
 * duplication of values in the returned array, even if there are duplicates in
 * the original arrays. You may assume that both arguments will always be
 * arrays.
 *
 *
 * Problem:
 * Given two arrays, return the result of combining both arrays together, but
 * removing duplicates beforehand.
 *
 * Input: 2 arrays
 * Output: Both arrays combined, with duplicates removed
 *
 * Rules:
 * - Remove duplicates, even if they exist in the original arrays
 *
 * Questions:
 * - Mutate either array or return a new array object?
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
 * **Creating a new array object
 * - Create new empty array and save in variable
 * - Iterate over first array
 *   - If current element exists in result array, skip
 *   - Otherwise, add element to result array
 * - Iterate over second array
 *   - If current element exists in result array, skip
 *   - Otherwise, add element to result array
 * - Return array
 */

function removeDuplicates(arr, result) {
  for (let el of arr) {
    if (result.includes(el)) {
      continue;
    } else {
      result.push(el);
    }
  }

  return result;
}

function union(arr1, arr2) {
  let result = [];

  result = removeDuplicates(arr1, result);
  result = removeDuplicates(arr2, result);

  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]