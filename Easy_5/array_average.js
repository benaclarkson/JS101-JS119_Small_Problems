/**
 * Write a function that takes one argument, an array of integers, and returns
 * the average of all the integers in the array, rounded down to the integer
 * component of the average. The array will never be empty, and the numbers will
 * always be positive integers.
 *
 *
 * Problem:
 * Given an array of integers, return the average of all integers in the array,
 * rounded down to the integer component of the average.
 *
 * Rules:
 * - Array will never be empty
 * - Numbers will always be positive integers
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
 * - Add all elements together
 * - Divide value by length of array
 * - Round result down
 */

function average(arr) {
  return Math.floor(arr.reduce((acc, curr) => acc + curr) / arr.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40