/**
 * PROBLEM:
 * Using the multiply() function from the "Multiplying Two Numbers" problem,
 * write a function that computes the square of its argument (the square is the
 * result of multiplying a number by itself).
 *
 * Input:
 * A number
 *
 * Output:
 * The result of multiplying an input by itself
 *
 *
 * EXAMPLES/TEST CASES:
 * See below
 *
 *
 * DATA STRUCTURE:
 * Number data type
 *
 *
 * ALGORITHM:
 * - Use the multiply function from the previous exercise.
 * - Declare a function, square, which allows for one parameter
 *   - return multiply(num, num);
 */

function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

/**
 * Further Exploration:
 * You would have to change the multiply function operator on `line 29` to be
 * `return num1 ** num2`. It would then make sense to also change the name of
 * the `multiply` function to `toThePowerOf` or something along those lines.
 */
