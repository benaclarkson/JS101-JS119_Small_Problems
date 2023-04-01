/**
 * PROBLEM:
 * Write a program that prompts the user for two positive integers, and then
 * prints the results of the following operations on those two numbers:
 * addition, subtraction, product, quotient, remainder, and power. Do not worry
 * about validating the input.
 *
 * Input:
 * Two positive integers
 *
 * Output:
 * Varying arithmetic operations logged to the console via string interpolation
 *
 * Rules:
 * Input validation is unnecessary.
 *
 *
 * EXAMPLES/TEST CASES:
 * ==> Enter the first number:
 * 23
 * ==> Enter the second number:
 * 17
 * ==> 23 + 17 = 40
 * ==> 23 - 17 = 6
 * ==> 23 * 17 = 391
 * ==> 23 / 17 = 1
 * ==> 23 % 17 = 6
 * ==> 23 ** 17 = 1.4105003956066297e+23
 *
 *
 * DATA STRUCTURE:
 * Number data types and string interpolation
 *
 *
 * ALGORITHM:
 * - Declare a constant READLINE and initialize it to the return value of
 *   require('readline-sync').
 * - Create prompt function that adds '==>' to the beginning of the text output
 *   by the computer.
 * - Ask user for first number using the prompt function and store result in
 *   a variable
 * - Ask user for second number using the prompt function and store result in
 *   a variable
 * - Pass string interpolations to prompt function for each of the calculations
 *   that need to occur
 */

const READLINE = require('readline-sync');

function prompt(msg) {
  console.log("==> " + msg);
}

prompt('Enter the first number:');
let num1 = +READLINE.question();
prompt('Enter the second number:');
let num2 = +READLINE.question();
prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${(num1 / num2).toFixed(0)}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${num1 ** num2}`);