/**
 * PROBLEM:
 * Write a function that takes a positive integer, n, as an argument and logs a
 * right triangle whose sides each have n stars. The hypotenuse of the triangle
 * (the diagonal side in the images below) should have one end at the lower-left
 * of the triangle, and the other end at the upper-right.
 *
 * Input:
 * Positive integer
 *
 * Output:
 * A right triangle that has n rows of stars and n total characters. The first
 * row has n - 1 spaces and 1 star. Then, n - 2 spaces and 2 stars. Etc. until
 * the final row with just has n stars.
 *
 * Question:
 * - Will input always be less than 80?
 *
 *
 * EXAMPLES/TEST CASES:
 * triangle(5);
 *     *
 *    **
 *   ***
 *  ****
 * *****
 *
 * triangle(9);
 *         *
 *        **
 *       ***
 *      ****
 *     *****
 *    ******
 *   *******
 *  ********
 * *********
 *
 *
 * DATA STRUCTURE:
 * Strings
 *
 *
 * ALGORITHM:
 * - Determine max num of spaces (num - 1)
 * - for (spaces = (num - 1); num >= 0; num -= 1) {
 *     console.log(`${' '.repeat(spaces)}*`)
 * - }
 */

function triangles(num) {
  for (let spaces = (num - 1); spaces >= 0; spaces -= 1) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(num - spaces)}`);
  }
}

triangles(5);
triangles(9);