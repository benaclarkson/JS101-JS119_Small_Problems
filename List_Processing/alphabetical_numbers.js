/**
 * Write a function that takes an array of integers between 0 and 19 and returns
 * an array of those integers sorted based on the English word for each number:
 *
 * zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven,
 * twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen
 *
 *
 * Problem:
 * Given an array of integers, return an array with the integers sorted in
 * alphabetical order, based on the English word for each number.
 *
 * Input: Array of integers
 * Output: Array of sorted integers
 *
 * Rules:
 * - Only integers 0-19 will be accounted for
 *
 * Questions:
 * - May I take advantage of newer JS sorting objects?
 * - New array or mutated original array?
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
 * - Map each number to a corresponding string representing the English word for
 *   the number
 * - Sort, based on the strings and return the values
 */

const ENGLISH_NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
  'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

let compareEnglish = function(num1, num2) {
  if (ENGLISH_NUMBERS[num1] > ENGLISH_NUMBERS[num2]) {
    return 1;
  } else if (ENGLISH_NUMBERS[num1] < ENGLISH_NUMBERS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(nums) {
  return nums.sort(compareEnglish);
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]