/**
 * Write a function that takes an array as an argument and returns an array that
 * contains two elements, each of which is an array. Put the first half of the
 * original array elements in the first element of the return value, and put the
 * second half in the second element. If the original array contains an odd
 * number of elements, place the middle element in the first half array.
 *
 *
 * Problem:
 * Given an array, return an array that contains two arrays, each with one half
 * of the original array.
 * If odd number of elements are given in initial array, put middle element in
 * first array.
 *
 * Rules:
 * - If odd number of elements are given, put middle element in first array
 *
 * Questions:
 * - Return new array or original array?
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
 * - Determine length of array
 * - If odd, determine middle index and set as middle variable
 * - If even, determine max index of first half and set as middle variable
 * - Iterate through input array so long as current index is not greater than
 *   middle variable
 *   - Put each element into new array
 * - Capture latter half of array (middle + 1) and place inside array
 * - Return array containing both sub arrays
 */

function determineMiddleIndex(arr) {
  let middleIndex;

  if (arr.length % 2 === 1) {
    middleIndex = Math.floor(arr.length / 2);
  } else {
    middleIndex = (arr.length / 2) - 1;
  }

  return middleIndex;
}

function halvsies(inputArr) {
  let firstHalf = [];
  let middleIndex = determineMiddleIndex(inputArr);

  for (let index = 0; index <= middleIndex; index += 1) {
    firstHalf.push(inputArr[index]);
  }

  return [firstHalf, inputArr.slice(middleIndex + 1)];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]