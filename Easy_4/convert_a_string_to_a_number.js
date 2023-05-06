/**
 * The parseInt() method converts a string of numeric characters (including an
 * optional plus or minus sign) to an integer. The method takes 2 arguments
 * where the first argument is the string we want to convert and the second
 * argument should always be 10 for our purposes. parseInt() and the Number()
 * method behave similarly. In this exercise, you will create a function that
 * does the same thing.
 *
 * Write a function that takes a string of digits and returns the appropriate
 * number as an integer. You may not use any of the methods mentioned above.
 *
 * For now, do not worry about leading + or - signs, nor should you worry about
 * invalid characters; assume all characters will be numeric.
 *
 * You may not use any of the standard conversion methods available in
 * JavaScript, such as String() and Number(). Your function should do this the
 * old-fashioned way and calculate the result by analyzing the characters in the
 * string.
 *
 *
 * Problem:
 * Given a string, return the numeric equivalent of that string.
 *
 * Input: String
 * Output: Number representing, char for char, the string
 *
 * Rules:
 * - Cannot use `parseInt()`, `Number()`, or String()
 * - Must convert input the "old-fashioned way".
 *
 *
 * Examples given below
 *
 *
 * Data Structure:
 * - Will use array of chars
 * - Will use object for translation
 *
 *
 * Algorithm:
 * - Determine starting place to begin building number (1's, 10's, 100's, etc.)
 *   - Start with place as 1
 *   - Iterate until an incremented count is equal to length of input string
 *     - Increase place by * 10 on each iteration
 *   - Return the place
 *
 * - Create a new variable, place, and set it equal to the above function
 * - Create a new variable, num, and set it equal to 0
 * - Iterate over string
 *   - Multiply the char at the iteration by place value
 *   - Add that to the num value
 *   - Reduce the tens place to the next smallest
 * - Return num
 */

function determineStartingPlace(str) {
  let place = 1;

  for (let count = 1; count < str.length; count += 1) {
    place *= 10;
  }

  return place;
}

function stringToInteger(str) {
  let place = determineStartingPlace(str);

  let num = 0;

  for (let char of str) {
    num += (char * place);
    place /= 10;
  }

  return num;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true