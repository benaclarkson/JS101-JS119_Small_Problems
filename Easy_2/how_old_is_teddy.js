/**
 * PROBLEM:
 * Build a program that randomly generates Teddy's age, and logs it to the
 * console. Have the age be a random number between 20 and 120 (inclusive).
 *
 * Input:
 * None
 *
 * Output:
 * A string stating the age of Teddy (once the age has been randomly calculated)
 *
 * Rules:
 * - Age must be a random number between 20 and 120 (inclusive)
 *
 *
 * EXAMPLES/TEST CASES:
 * Teddy is 69 years old!
 *
 *
 * DATA STRUCTURE:
 * Math data structure and string interpolation
 *
 *
 * ALGORITHM:
 * - Declare a function getRandomAge(min, max)
 *   - return the result of calling Math.random()
 */

function getRandomIntInclusive(min, max) {
  return Math.round((Math.random() * (max - min + 1)) + min);
}

let age = getRandomIntInclusive(20, 120);

console.log(`Teddy is ${age} years old!`);

/**
 * Further Exploration:
 * The randomBetween function used the Math.floor() method. Would it make a
 * difference if the Math.round() method was used instead?
 *
 * Also, how can we make the function more robust? What if the user
 * inadvertently gave the inputs in reverse order (i.e., the value passed to min
 * was greater than max)?
 *
 *
 * Solution:
 * The difference between the Math.floor() and Math.round() methods are that the
 * former rounds down, and the latter rounds to the nearest integer.
 */