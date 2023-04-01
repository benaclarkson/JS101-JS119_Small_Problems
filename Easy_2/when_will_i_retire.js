/**
 * PROBLEM:
 * Build a program that logs when the user will retire and how many more years
 * the user has to work until retirement.
 *
 * Input:
 * 2 integers. The first represents the user's age. The second, the year they
 * would like to retire.
 *
 * Output:
 * Interpolated strings stating when the user will retire.
 *
 * Rules:
 * - Always a positive input from user?
 *
 *
 * EXAMPLES/TEST CASES:
 * What is your age? 30
 * At what age would you like to retire? 70
 *
 * It's 2017. You will retire in 2057.
 * You have only 40 years of work to go!
 *
 *
 * DATA STRUCTURE:
 * String and Number data types
 *
 *
 * ALGORITHM:
 * - Declare a constant READLINE and initialize it to the return value of
 *   invoking require('readline-sync')
 * - Declare a variable, age, and initialize it to the return value of calling
 *   +READLINE.question('What is your age? ')
 * - Declare a variable, retirement, and initialize it to the return value of
 *   calling +READLINE.question('At what age would you like to retire? ')
 * - Declare a variable, currentYear, and initialize it to the return value of
 *   calling Date.now().getFullYear()
 * - Use string interpolation to tell the user what year it is and in what year
 *   they will retire.
 * - Use string interpolation to tell the user how many more years of work they
 *   have left until they can retire.
 */

const READLINE = require('readline-sync');

let age = +READLINE.question('What is your age? ');
let retirement = +READLINE.question('At what age would you like to retire? ');

let today = new Date();
let currentYear = today.getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + (retirement - age)}.`);
console.log(`You only have ${retirement - age} more years of work to go!`);