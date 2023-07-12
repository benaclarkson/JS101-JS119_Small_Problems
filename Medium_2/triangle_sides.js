/**
 * A triangle is classified as follows:
 *  - Equilateral: All three sides are of equal length.
 *  - Isosceles: Two sides are of equal length, while the third is different.
 *  - Scalene: All three sides are of different lengths.
 *
 * To be a valid triangle, the sum of the lengths of the two shortest sides must
 * be greater than the length of the longest side, and every side must have a
 * length greater than 0. If either of these conditions is not satisfied, the
 * triangle is invalid.
 *
 * Write a function that takes the lengths of the three sides of a triangle as
 * arguments and returns one of the following four strings representing the
 * triangle's classification: 'equilateral', 'isosceles', 'scalene', or
 * 'invalid'.
 *
 *
 * Problem:
 * Given three numbers, determine if a valid triangle is possible from the given
 * dimensions. If so, determine what kind of triangle the dimensions would
 * create and return a string word representation for the type of triangle.
 * Otherwise, return 'invalid'.
 *
 * Input: 3 Numbers
 * Output: String ("equilateral", "isosceles", "scalene", or "invalid")
 *
 * Rules:
 * - Sum of two shortest lengths must be greater than longest length
 * - Every length must be greater than 0
 * - Equilateral: All three sides are equal length
 * - Isosceles: Two sides are equal, while third is different
 * - Scalene: All three sides are different length
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
 * - Put all 3 arguments into an array
 * - Sort the array numerically in descending order
 * - Iterate over array to check if some of the elements are less than or equal
 *   to 0
 *   - If so, return 'invalid'
 * - Add the last two elements together and check to see if their sum is greater
 *   than the first element in the sorted array
 *   - If not, return 'invalid'
 * - Check if all 3 lengths are the same length
 * - Check if 2 of the lengths are the same
 *   - Iterate over each length and check current length against the others
 *     - If there is a match, return 'isosceles'
 * - If no other tests evaluate to true, return 'scalene'
 */

function equilateral(lengths) {
  return (lengths.every(len => len === lengths[0]));
}

function isosceles(lengths) {
  for (let idx = 0; idx < lengths.length; idx += 1) {
    if (lengths.filter(len => len === lengths[idx]).length === 2) return true;
  }

  return false;
}

function triangle(len1, len2, len3) {
  let sortedLengths = [len1, len2, len3].sort((a, b) => b - a);

  if (sortedLengths.some(len => len <= 0) ||
     ((sortedLengths[1] + sortedLengths[2]) < sortedLengths[0])) {
    return 'invalid';
  } else if (equilateral(sortedLengths)) {
    return 'equilateral';
  } else if (isosceles(sortedLengths)) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"