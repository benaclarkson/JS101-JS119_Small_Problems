/**
 * Take the number 735291 and rotate it by one digit to the left, getting
 * 352917. Next, keep the first digit fixed in place and rotate the remaining
 * digits to get 329175. Keep the first two digits fixed in place and rotate
 * again to get 321759. Keep the first three digits fixed in place and rotate
 * again to get 321597. Finally, keep the first four digits fixed in place and
 * rotate the final two digits to get 321579. The resulting number is called
 * the maximum rotation of the original number.
 *
 * Write a function that takes an integer as an argument and returns the maximum
 * rotation of that integer. You can (and probably should) use the
 * rotateRightmostDigits function from the previous exercise.
 *
 *
 * Problem:
 * Given a number, return the number after maximum rotation of the integer has
 * occured.
 *
 * Input: Integer
 * Output: Rotated Integer
 *
 *
 * Examples/Test Cases:
 * - Given below
 *
 *
 * Data Structure:
 * - Array of integers
 *
 *
 * Algorithm:
 * - Using the rotateRightmostDigits function from the rotation_pt_2 exercise,
 *   pass in the result of calling said function, with a secondary argument of
 *   an integer decrementing by a single digit. This will repeatedly reduce the
 *   rotation group, thus updating the final number to its max rotation.
 */

function rotateRightmostDigits(mainNumber, maxRotation) {
  let num1String = String(mainNumber);
  let nums = num1String.split('');
  let workingArray = [];

  for (let count = 1; count <= maxRotation; count += 1) {
    workingArray.unshift(nums.pop());
  }

  let endNum = workingArray.shift();
  let result = nums.concat(workingArray);
  result.push(endNum);
  result = Number(result.join(''));
  return result;
}

function maxRotation(numToRotate) {
  let result = rotateRightmostDigits(numToRotate, String(numToRotate).length);

  for (let index = String(numToRotate).length - 1; index > 1; index -= 1) {
    result = rotateRightmostDigits(result, index);
  }

  return result;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845