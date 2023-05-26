/**
 * Write a function that takes an Array as an argument and reverses its elements
 * in place. That is, mutate the Array passed into this method. The return value
 * should be the same Array object.
 *
 * You may not use Array.prototype.reverse().
 *
 *
 * Problem:
 * Given an array, return the same array with all its elements reversed in
 * order. Do so without the use of Array.prototype.reverse().
 *
 * Input: Array
 * Output: (same) Array
 *
 * Rules:
 * - Input and output arrays must be same array object
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
 * - Store the value of array length in variable
 * - Create new variable, location, and set it equal to length - 1
 * - Iterate over array while count is less than length of array
 *   - Remove the first element and store in variable
 *   - Place it back into the array at location index
 *   - Decrement the location value by 1
 * - Return array
 */

function reverse(arr) {
  let iterations = arr.length;
  let location = iterations - 1;

  arr.forEach(_ => {
    let currElement = arr.shift();
    arr.splice(location, 0, currElement);
    location -= 1;
  });

  return arr;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true