/**
 * Write a function that takes a grocery list in a two-dimensional array and
 * returns a one-dimensional array. Each element in the grocery list contains a
 * fruit name and a number that represents the desired quantity of that fruit.
 * The output array is such that each fruit name appears the number of times
 * equal to its desired quantity.
 *
 * In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus,
 * we return an array that contains 3 apples, 1 orange, and 2 bananas.
 *
 *
 * Problem:
 * Given an array containing subarrays of two elements (a string and a number),
 * return an array containing strings which are repeated based on the number
 * element from each corresponding subarray.
 *
 * Input: Array
 * Output: Array
 *
 * Questions:
 * - Should I mutate the original array or should a new array be returned?
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
 * **Assuming new array is returned**
 * - Declare a new variable, result, and initialize it to an empty array
 * - Iterate over main array
 *   - Repeat the string at index 0 (index 1) number of times and store in
 *     result
 * - Return result
 */

function buyFruit(mainArr) {
  let result = [];

  mainArr.forEach(subArr => {
    for (let count = subArr[1]; count > 0; count -= 1) {
      result.push(subArr[0]);
    }
  });

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]