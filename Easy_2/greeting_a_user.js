/**
 * PROBLEM:
 * Write a program that will ask for user's name. The program will then greet
 * the user. If the user writes "name!" then the computer yells back to the
 * user.
 *
 * Input:
 * String from readline-sync
 *
 * Output:
 * String representing a greeting to the user.
 *
 * Rules:
 * - If user adds a `'!'` character to their name, the output should scream back
 *   at the user.
 *
 *
 * EXAMPLES/TEST CASES:
 * What is your name? Bob
 * Hello Bob.
 *
 * What is your name? Bob!
 * HELLO BOB. WHY ARE WE SCREAMING?
 *
 *
 * DATA STRUCTURE:
 * String data type
 *
 *
 * ALGORITHM:
 * - Declare and initialize a new consant, READLINE, to the return value of
 *   requiring readline-sync
 * - Declare a new variable and initialize it to the return value of calling
 *   READLINE.question('What is your name? ');
 * - If name.endswith('!') reply with a screaming response
 * - Otherwise, reply with a normal response
 */

const READLINE = require('readline-sync');

let name = READLINE.question("What is your name? ");

if (name.endsWith('!')) {
  console.log(`HELLO ${name.substring(0, (name.length - 1)).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}