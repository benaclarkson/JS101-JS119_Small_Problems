/**
 * Write a function that combines two arrays passed as arguments, and returns a
 * new array that contains all elements from both array arguments, with each
 * element taken in alternation.
 *
 * You may assume that both input arrays are non-empty, and that they have the
 * same number of elements.
 *
 *
 * Problem:
 * Given two arrays, return a new array that combines both arrays zippered
 * together in an alternating pattern.
 *
 * Input: 2 arrays
 * Output: Array
 *
 * Rules:
 * - Both input arrays are non-empty
 * - Both input arrays contain same number of elements
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
 * - Create a new empty array
 * - Iterate until length of either input array
 * - Push each element from each array into new array, alternating
 * - Return new array
 */

// Solution using for loop
// function interleave(arr1, arr2) {
//   let result = [];

//   for (let index = 0; index < arr1.length; index += 1) {
//     result.push(arr1[index], arr2[index]);
//   }

//   return result;
// }

// Solution using forEach method
// function interleave(arr1, arr2) {
//   let result = [];

//   arr1.forEach((el, idx) => {
//     result.push(el, arr2[idx]);
//   });

//   return result;
// }

// Solution using map method
// function interleave(arr1, arr2) {

//   let result = arr1.map((el, idx) => {
//     return [el, arr2[idx]];
//   });

//   return result.flat();
// }

console.log((interleave([1, 2, 3], ['a', 'b', 'c'])));    // [1, "a", 2, "b", 3, "c"]