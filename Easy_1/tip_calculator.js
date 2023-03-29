/**
 * PROBLEM:
 * Create a simple tip calculator. The program should prompt for a bill amount
 * and a tip rate. The program must compute the tip, and then log both the tip
 * and the total amount of the bill to the console. You can ignore input
 * validation and assume that the user will enter numbers.
 * 
 * Input:
 * User input, as string data types.
 * - A bill amount
 * - A tip percentage
 * 
 * Output:
 * Two lines logged to the console
 * 1. A string stating what the tip is (after calculating it based on input).
 * 2. The total price of the bill after the tip has been added.
 * 
 * Rules:
 * - Return value not mentioned. Assume unnecessary.
 * - Ignore input validation/assume user will enter numbers
 * 
 * 
 * EXAMPLES/TEST CASES:
 * What is the bill? 200
 * What is the tip percentage? 15
 * 
 * The tip is $30.00
 * The total is $230.00
 * 
 * 
 * DATA STRUCTURE:
 * String and Number data types.
 * 
 * 
 * ALGORITHM:
 * x Require readline-sync
 * x Invoke `console.log('What is the bill? ');`
 * x Call `prompt` on the readline-sync variable and save return value in
 *   variable, `bill`.
 *   x Before storing data in `bill`, call `.toFixed(2)` and `Number()` on the
 *     return value of the `prompt` invocation.
 * x Do the same two steps above with the tip percentage, but divide by 100 prior
 * x Initialize a new variable, `tip` and set it equal to `bill * percentage`
 * x console.log(`The tip is $${tip.toFixed(2)}`);
 * x console.log(`The total is $${(tip + bill).toFixed(2)}`);
 */

let rlSync = require('readline-sync')
console.log('What is the bill? ');
let bill = Number(rlSync.prompt());
console.log('What is the tip percentage? ');
let percentage = Number(rlSync.prompt()) / 100;

let tip = Number(bill * percentage);

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${(tip + bill).toFixed(2)}`);