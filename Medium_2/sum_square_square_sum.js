/**
 * Write a function that computes the difference between the square of the sum
 * of the first count positive integers and the sum of the squares of the first
 * count positive integers.
 *
 *
 * Problem:
 * Given a number, return the difference of positive integers from 1 to number
 * summed, then squared minus the sum of each integer from 1 to number squared,
 * then summed together.
 *
 * Input: Number
 * Output: Number
 *
 *
 * Examples/Test Cases:
 * - Given below
 *
 *
 * Data Structure:
 * - Array
 *
 *
 * Algorithm:
 * - Create an array of all positive integers up to count
 * - Store the result of adding the numbers together and squaring that sum in a
 *   variable, sumSquare
 * - Store the result of squaring each number, then adding them all together in
 *   a variable, squareSum
 * - Return sumSquare - squareSum
 */

function sumSquare(nums) {
  return nums.reduce((acc, curr) => acc + curr) ** 2;
}

function squareSum(nums) {
  return nums.map(num => num ** 2).reduce((acc, curr) => acc + curr);
}

function sumSquareDifference(count) {
  if (count <= 1) return 0;

  let nums = [];
  for (let num = 1; num <= count; num += 1) {
    nums.push(num);
  }

  return sumSquare(nums) - squareSum(nums);
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150