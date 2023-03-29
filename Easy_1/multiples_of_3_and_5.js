/**
 * PROBLEM:
 * Write a function that computes the sum of all numbers between 1 and some
 * other number, inclusive, that are multiples of 3 or 5. For instance, if the
 * supplied number is 20, the result should be 98
 * (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
 *
 * You may assume that the number passed in is an integer greater than 1.
 *
 * Input:
 * Integer greater than 1
 *
 * Output:
 * Sum of all numbers between 1 and input, inclusive, that are mutliples of 3
 * or 5
 *
 * Rules:
 * Must include input
 *
 *
 * EXAMPLES/TEST CASES:
 * See below
 *
 *
 * DATA STRUCTURE:
 * Number data type
 *
 *
 * ALGORITHM:
 * - Initialize a new variable, sum = 0
 * - Declare a function, multisum, that allows for one parameter, num
 * - Declare a for loop -- let count = 1, count === num, count += 1
 *   - if count % 3 === 0 || count % 5 === 0
 *     - sum += count
 * - return sum
 */

function multisum(num) {
  let sum = 0;

  for (let count = 1; count <= num; count += 1) {
    if (count % 3 === 0 || count % 5 === 0) {
      sum += count;
    }
  }

  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168