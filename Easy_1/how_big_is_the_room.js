/**
 * PROBLEM:
 * Build a program that asks the user to enter the length and width of a room in
 * meters, and then logs the area of the room to the console in both square
 * meters and square feet.
 * 
 * Note: 1 square meter == 10.7639 square feet
 * 
 * Do not worry about validating the input at this time. Use the 
 * readlineSync.prompt method to collect user input.
 * 
 * Input:
 * - Length of room (in meters)
 * - Width of room (in meters)
 * 
 * Output:
 * - Log area of room in both square meters and square feet
 * - Return value not specified
 * 
 * Rules:
 * - Input validation is unnecessary
 * - 1 square meter == 10.7639 square feet
 * 
 * Mental Model:
 * 
 * 
 * 
 * EXAMPLES/TEST CASES:
 * Enter the length of the room in meters:
 * 10
 * Enter the width of the room in meters:
 * 7
 * 
 * The area of the room is 70.00 square meters (753.47 square feet).
 * 
 * 
 * DATA STRUCTURE:
 * Use the String data type from user input, then convert to Number data type
 * for any mathematical operations.
 * Output will be variables interpolated into string.
 * 
 * ALGORITHM:
 * - Require readline-sync
 * - Request input from user
 *   - Convert string return values of readline-sync to Number data types
 *   - Simulataneously initialize two new variables `length` and `width` and
 *     save the return values accordingly.
 * - Initialize a new variable, `sqMetersArea` and set it equal to the return
 *   value of multiplying `(length * width).toFixed(2)`
 * - Initialize a new variable, `sqFeetArea` and set it equal to the return
 *   value of multiplying `(sqMetersArea * 10.7639).toFixed(2)`
 * - Invoke `console.log(`The area of the room is ${sqMetersArea} meters (${sqFeetArea} square feet).`) 
 */

// let rlSync = require('readline-sync')
// console.log('Enter the length of the room in meters:');
// let length = Number(rlSync.prompt());
// console.log('Enter the width of the room in meters:');
// let width = Number(rlSync.prompt());

// let sqMetersArea = (length * width).toFixed(2);
// let sqFeetArea = (sqMetersArea * 10.7639).toFixed(2);

// console.log(`The area of the room is ${sqMetersArea} square meters (${sqFeetArea} square feet).`);

/**
 * FURTHER EXPLORATION:
 * Modify the program so that it asks the user for the input type (meters or
 * feet). Compute for the area accordingly, and log it and its conversion in
 * parentheses. 
 * 
 * 
 * ALGORITHM:
 * - Capture all the details the same as before from user
 * - Also capture the type of input that is given
 *   - Check the `prompt` npm options to validate input
 * - Declare a consant, `SQ_METERS_TO_FEET` and set it equal to `10.7639`
 * - Declare an `if` conditional to check the value of measurement
 *   - if value is `'meters'`
 *     - let sqMetersArea = (length * width).toFixed(2);
 *     - let sqFeetArea = (sqMetersArea * SQ_METERS_TO_FEET).toFixed(2);
 *     - console.log(`The area of the room is ${sqMetersArea} meters (${sqFeetArea} square feet).`);
 *   - if value is `'feet'`
 *     - let sqFeetArea = (length * width).toFixed(2);
 *     - let sqMetersArea = (sqFeetArea / SQ_METERS_TO_FEET).toFixed(2);
 *     - console.log(`The area of the room is ${sqFeetArea} feet (${sqMetersArea} square meters).`);
 *   - if value is neither, log an error to the console.
 */

let rlSync = require('readline-sync')

console.log('Enter the length of the room:');
let length = Number(rlSync.prompt());
console.log('Enter the width of the room:');
let width = Number(rlSync.prompt());
console.log('Are these measurements in meters or feet?');
let inputMeasurement = rlSync.prompt();

const SQ_METERS_TO_FEET = 10.7639;

if (inputMeasurement === 'meters') {
  let sqMetersArea = (length * width).toFixed(2);
  let sqFeetArea = (sqMetersArea * SQ_METERS_TO_FEET).toFixed(2);

  console.log(
    `The area of the room is ${sqMetersArea} square meters (${sqFeetArea} square feet).`
  );
} else if (inputMeasurement === 'feet') {
  let sqFeetArea = (length * width).toFixed(2);
  let sqMetersArea = (sqFeetArea / SQ_METERS_TO_FEET).toFixed(2);

  console.log(
    `The area of the room is ${sqFeetArea} square feet (${sqMetersArea} square meters).`
  );
} else {
  console.log('Error. Invalid input.');
}