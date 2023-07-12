/**
 * A featured number (something unique to this exercise) is an odd number that
 * is a multiple of 7, with all of its digits occurring exactly once each. For
 * example, 49 is a featured number, but 98 is not (it is not odd), 97 is not
 * (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).
 *
 * Write a function that takes an integer as an argument and returns the next
 * featured number greater than the integer. Issue an error message if there is
 * no next featured number.
 *
 * NOTE: The largest possible featured number is 9876543201.
 *
 *
 * Problem:
 * Given an integer, return the next featured number greater than the integer or
 * return "There is no possible number that fulfills those requirements."
 *
 * Input: Integer
 * Output: Integer or error message
 *
 * Rules:
 * - Featured number properties:
 *   - Odd number
 *   - Multiple of 7
 *   - All digits occur exactly once
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
 * - Guard clause: if featured number is greater than 9876543201, return error
 *   message
 * - Loop/increment number by 1
 *   - Check if number is odd
 *     - If so, check if number is multiple of 7
 *       - If so, check if all digits occur only once
 *         - If so, return number
 * - Return error message
 */

function featured(num) {
  do {
    num += 1;

    if (num % 2 === 1) {
      if (num % 7 === 0) {
        if (Number([... new Set(String(num).split(''))].join('')) === num) {
          return num;
        }
      }
    }
  } while (num <= 9876543201);

  return "There is no possible number that fulfills those requirements.";
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."