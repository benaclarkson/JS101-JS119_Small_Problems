/**
 * In the previous exercise, we developed a recursive solution for computing the
 * nth Fibonacci number. In a language that is not optimized for recursion, some
 * (but not all) recursive functions can be extremely slow and may require
 * massive quantities of memory and/or stack space. If you tested for bigger nth
 * numbers, you might have noticed that getting the 50th fibonacci number
 * already takes a significant amount of time.
 *
 * Fortunately, every recursive function can be rewritten as a non-recursive
 * (or procedural) function.
 *
 * Rewrite your recursive fibonacci function so that it computes its results
 * without using recursion.
 */

function addNextFibonacciNumber(nums) {
  let nextFib = nums[nums.length - 2] + nums[nums.length - 1];
  nums.push(nextFib);
}

function fibonacci(num) {
  let count = 2;
  let fibs = [1, 1];

  while (count < num) {
    addNextFibonacciNumber(fibs);
    count += 1;
  }

  return fibs[fibs.length - 1];
}

console.log(fibonacci(20) === 6765);              // 6765
console.log(fibonacci(50) === 12586269025);       // 12586269025
console.log(fibonacci(75) === 2111485077978050);  // 2111485077978050