/**
 * Write a function that rotates the last count digits of a number. To perform
 * the rotation, move the first of the digits that you want to rotate to the end
 * and shift the remaining digits to the left.
 *
 *
 * Problem:
 * Given two numbers, remove the element at the index of the second given number
 * and add it to the end.
 *
 * Input: Two numbers
 * Output: One number
 *
 *
 * Examples/Tests:
 * - Given below
 *
 *
 * Data Structure
 * - Array
 *
 *
 * Algorithm:
 * - Convert number 1 into string
 * - Split string into array of characters
 * - Until count reaches num2,
 *   - Remove last character and store in new array
 *   - Remove first character, store in variable
 * - Concat new array into working array
 * - Concat first character from variable
 * - Join together
 * - Convert to num
 * - Return number
 */

function rotateRightmostDigits(num1, num2) {
  let num1String = String(num1);
  let nums = num1String.split('');
  let workingArray = [];

  for (let count = 1; count <= num2; count += 1) {
    workingArray.unshift(nums.pop());
  }

  let endNum = workingArray.shift();
  let result = nums.concat(workingArray);
  result.push(endNum);
  result = Number(result.join(''));
  return result;
}

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);