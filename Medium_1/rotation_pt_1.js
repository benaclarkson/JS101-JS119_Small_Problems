/**
 * Write a function that rotates an array by moving the first element to the end
 * of the array. Do not modify the original array.
 *
 * - If the input is not an array, return undefined.
 * - If the input is an empty array, return an empty array.
 *
 * Review the test cases below, then implement the solution accordingly.
 *
 *
 * Problem:
 * Given an array, return a new array containing the same elements, but with the
 * first element from the original array now at the end of the array.
 *
 * Input: Array
 * Output: Array (or undefined)
 *
 * Rules:
 * - Do not mutate original array
 * - If input is not an array, return undefined
 * - If input is empty array, return empty array
 *
 *
 * Examples/Tests:
 * - Given below
 *
 *
 * Data Structure:
 * - Array
 *
 *
 * Algorithm:
 * - Validate input
 *   - Check if input is array -- return undefined if not
 *   - Check if input is empty -- return empty array if so
 * - Make a shallow copy of the array
 * - Remove the first element
 * - Add element to the end
 * - Return copied array
 */

function rotateArray(originalArray) {
  if (!Array.isArray(originalArray)) return undefined;
  if (!originalArray.length) return [];

  let result = originalArray.slice();
  let firstElem = result.shift();
  result.push(firstElem);

  return result;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]