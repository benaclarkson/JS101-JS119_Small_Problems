/**
 * Create a function that takes two integers as arguments. The first argument is
 * a count, and the second is the starting number of a sequence that your
 * function will create. The function should return an array containing the same
 * number of elements as the count argument. The value of each element should be
 * a multiple of the starting number.
 *
 * You may assume that the count argument will always be an integer greater than
 * or equal to 0. The starting number can be any integer. If the count is 0, the
 * function should return an empty array.
 *
 *
 * Problem:
 * Given two integers (a count, a starting number of a sequence), return an
 * array containing the same number of elements as the count value. And the
 * value of each element should be a multiple of the starting number.
 *
 * Input: Two Integers
 * Output: Array
 *
 * Rules:
 * - Count arg will always be an integer greater than or equal to 0
 * - Starting number can be any integer
 * - If count is 0, return empty array
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
 * - Guard clause to account for 0 count
 * - Initialize a new, empty array & store in variable, result
 * - While incrementer is less than count, loop
 *   - At each iteration, push result of startNum * incrementor into result
 * - Return result
 */

function sequence(count, startNum) {
  let result = [];

  if (count === 0) return result;

  for (let incrementor = 1; incrementor <= count; incrementor += 1) {
    result.push(startNum * incrementor);
  }

  return result;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []