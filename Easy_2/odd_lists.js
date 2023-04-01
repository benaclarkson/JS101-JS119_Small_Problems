/**
 * PROBLEM:
 * Write a function that returns an Array that contains every other element of
 * an Array that is passed in as an argument. The values in the returned list
 * should be those values that are in the 1st, 3rd, 5th, and so on elements of
 * the argument Array.
 *
 * Input:
 * Array of values
 *
 * Output:
 * Every other element from the input array, starting with index 0
 *
 * Rules:
 * - If input only contains one element, an array containing that element is
 *   returned
 * - If input is empty array, return empty array
 *
 * Questions:
 * - Is the returned array the same array object that was input or is it a new
 *   array object?
 *
 * EXAMPLES/TEST CASES:
 * See below
 *
 *
 * DATA STRUCTURE:
 * Array
 *
 *
 * ALGORITHM:
 * - Declare a function, oddities(arr)
 *   - Declare a new local variable, result, and initialize it to []
 *   - Iterate through arr using a for loop (start with idx = 0 and increment by
 *     2)
 *   - Upon each iteration, push the element at current index into result
 * - Return result
 */

function oddities(arr) {
  let result = [];

  for (let idx = 0; idx < arr.length; idx += 2) {
    result.push(arr[idx]);
  }

  return result;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

/**
 * Further Exploration:
 * Write a companion function that returns the 2nd, 4th, 6th, and so on elements
 * of an array.
 *
 * Try to solve this exercise in a different way.
 *
 *
 * ALGORITHM:
 * - Declare a function, evens(arr)
 *   - Declare a new local variable, result, and initialize it to []
 *   - Iterate through arr using forEach with optional argument to track index
 *     - if index is even
 *       - push current element into result
 *   - return result
 */

// Solution 1
function evens(arr) {
  let result = [];

  arr.forEach((el, idx) => {
    if (idx % 2 !== 0) {
      result.push(el);
    }
  });

  return result;
}

// Solution 2
function evens(arr) {
  return arr.filter((el, idx) => idx % 2 !== 0);
}

console.log(evens([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evens([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evens(["abc", "def"])); // logs ['def']
console.log(evens([123])); // logs []
console.log(evens([])); // logs []