/**
 * Bubble Sort is one of the simplest sorting algorithms available. It is not an
 * efficient algorithm, so developers rarely use it in real code. However, it is
 * an excellent exercise for student developers. In this exercise, you will
 * write a function that sorts an array using the bubble sort algorithm.
 *
 * A bubble sort works by making multiple passes (iterations) through an array.
 * On each pass, the two values of each pair of consecutive elements are
 * compared. If the first value is greater than the second, the two elements are
 * swapped. This process is repeated until a complete pass is made without
 * performing any swaps. At that point, the array is completely sorted.
 *
 * We can stop iterating the first time we make a pass through the array withou
 *  making any swaps because this means that the entire array is sorted.
 *
 * For further information — including pseudo-code that demonstrates the
 * algorithm, as well as a minor optimization technique — see the Bubble Sort
 * Wikipedia page.
 *
 * Write a function that takes an array as an argument and sorts that array
 * using the bubble sort algorithm described above. The sorting should be done
 * "in-place" — that is, the function should mutate the array. You may assume
 * that the array contains at least two elements.
 *
 *
 * Problem:
 * Given an array, sort the entire array using the Bubble Sort method.
 *
 * Input: Array
 * Output: (Sorted) Array
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
 * - Declare and initialize a variable, swapped, and initialize it to the value
 *   of true
 * - Perform a loop that continues so long as the swapped variable is equal to
 *   true
 *   - Perform a loop through the entire array
 *     - Check the two elements next to one another to see if the value on the
 *       left is greater than the value on the right
 *     - If so
 *       - Swap the elements
 *       - Set swapped to true
 *   - If the value of the element on the left is less than the value of the
 *     element on the right
 *     - Set swapped to false
 * - Return the mutated array
 */

function bubbleSort(arr) {
  let swapped = true;

  while (swapped === true) {
    swapped = false;
    for (let idx = 1; idx < arr.length; idx += 1) {
      if (arr[idx - 1] > arr[idx]) {
        [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
        swapped = true;
      }
    }
  }

  return arr;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]