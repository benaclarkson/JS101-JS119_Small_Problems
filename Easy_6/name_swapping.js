/**
 * Write a function that takes a string argument consisting of a first name, a
 * space, and a last name, and returns a new string consisting of the last name,
 * a comma, a space, and the first name.
 *
 *
 * Problem:
 * Given a string with two words separated by a space, return the string
 * reformatted to have the last word first and first word last, delimited by a
 * comma and space.
 *
 * Input: String
 * Output: String
 *
 *
 * Example case given below
 *
 *
 * Data Structure:
 * - Array
 *
 *
 * Algorithm:
 * - Split string on space
 * - Reverse array
 * - Join array with ", " and return
 */

// function swapName(str) {
//   return str.split(' ').reverse().join(', ');
// }

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// Further Exploration
function swapName(str) {
  let names = str.split(' ');

  return `${names[names.length - 1]}, ${names.slice(0, names.length - 1).join(' ')}`;
}

console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"