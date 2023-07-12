/**
 * A triangle is classified as follows:
 *  - Right: One angle is a right angle (exactly 90 degrees).
 *  - Acute: All three angles are less than 90 degrees.
 *  - Obtuse: One angle is greater than 90 degrees.
 *
 * To be a valid triangle, the sum of the angles must be exactly 180 degrees,
 * and every angle must be greater than 0. If either of these conditions is not
 * satisfied, the triangle is invalid.
 *
 * Write a function that takes the three angles of a triangle as arguments and
 * returns one of the following four strings representing the triangle's
 * classification: 'right', 'acute', 'obtuse', or 'invalid'.
 *
 * You may assume that all angles have integer values, so you do not have to
 * worry about floating point errors. You may also assume that the arguments are
 * in degrees.
 *
 *
 * Problem:
 * Given three angles, determine what type of triangle the degrees make.
 *
 * Input: 3 numbers
 * Output: String representation of the type of triangle
 *
 * Rules:
 * - Sum of 3 angles must be exactly 180 degrees
 * - Every angle must be greater than 0
 * - Right: One angle is a right angle (exactly 90 degrees).
 * - Acute: All three angles are less than 90 degrees.
 * - Obtuse: One angle is greater than 90 degrees.
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
 * - Add all angles together and save in variable, sum
 * - Check if sum is 180
 *   - If not, return 'invalid'
 * - Check if any angle is less than 1
 *   - If so, return 'invalid'
 * - Check if at least one angle is 90
 *   - If so, return 'right'
 * - Check if all three angles are less than 90
 *   - If so, return 'acute'
 * - Check if one angle is great than 90
 *   - If so, return 'obtuse'
 */

function triangle(first, second, third) {
  let sum = first + second + third;
  if (sum !== 180) {
    return 'invalid';
  } else if (first < 1 || second < 1 || third < 1) {
    return 'invalid';
  } else if (first === 90 || second === 90 || third === 90) {
    return 'right';
  } else if (first < 90 && second < 90 && third < 90) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"