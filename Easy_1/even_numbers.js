/**
 * PROBLEM:
 * Log all even numbers from 1 to 99, inclusive, to the console, with each
 * number on a separate line.
 * 
 * Input:
 * None
 * 
 * Output:
 * - All even numbers from 1 to 99, inclusive, with each number on a separate
 *   line.
 * - Return value not specified.
 * 
 * Rules:
 * - Only even numbers logged to console.
 * - Each number on its own line
 * - Output must be inclusive.
 * 
 * 
 * EXAMPLES/TEST CASES:
 * Explicit in initial problem explanation.
 * 
 * 
 * DATA STRUCTURE:
 * Integers
 * 
 * 
 * ALGORITHM:
 * - Declare a `for` loop
 *   - Initialize variable set to 2
 *   - Set the condition to `num < 100`
 *   - Set increment to `num += 2`
 * - Call `console.log(num)` upon each iteration 
 */

for (let num = 2; num < 100; num += 2) {
  console.log(num);
}