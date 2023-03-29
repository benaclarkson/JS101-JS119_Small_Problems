/**
 * PROBLEM:
 * Write a program that asks the user to enter an integer greater than 0, then
 * asks whether the user wants to determine the sum or the product of all
 * numbers between 1 and the entered integer, inclusive.
 * 
 * Input:
 * - An integer greater than 0
 * - A string (either "s" or "p")
 * 
 * Output:
 * A string logged to the console: The sum or product (depending on string entered
 * by user) of all numbers between 1 and the supplied integer, inclusive.
 * 
 * Rules:
 * - Computed value must be inclusive
 * 
 * 
 * EXAMPLES/TEST CASES:
 * Please enter an integer greater than 0: 5
 * Enter "s" to compute the sum, or "p" to compute the product. s
 * 
 * The sum of the integers between 1 and 5 is 15.
 * 
 * Please enter an integer greater than 0: 6
 * Enter "s" to compute the sum, or "p" to compute the product. p
 * 
 * The product of the integers between 1 and 6 is 720.
 * 
 * 
 * DATA STRUCTURE:
 * The program will use both String and Number data types.
 * 
 * 
 * ALGORITHM:
 * - Initialize a new variable, rlSync, and set it equal to the return value of
 *   invoking require(readline-sync)
 * - Initialize a new variable, userNum, and set it equal to -1
 * - Initialize a new variable, sumOrProduct, and set it equal to ''
 * - Declare a function, requestUserNumber, which returns the value returned by
 *   invoking the .question() method on rlSync
 *   - return rlSync.question('Please enter an integer greater than 0: ')
 * - Declare a function, requestOperation, which returns the value returned by
 *   invoking the `.question()` method on `rlSync`
 *   - return rlSync.question('Enter "s" to compute the sum, or "p" to compute
 *     the product. ')
 * - Initialize a while loop for userNum input validation
 *   while (userNum < 0) { userNum = requestUserNumber() }
 * - Initialize a while loop for sumOrProduct input validation
 *   while (sumOrProduct !== 's' && sumOrProduct !== 'p') { sumOrProduct = requestOperation() } 
 * - Initialize a new variable, `sum`, and set it equal to 0
 * - Initialize a new variable, `product`, and set it equal to 1
 * - If sumOrProduct === 's':
 *   - Declare a `for` loop
 *     - for (let i = 1; i <= num; i += 1) {
 *         sum += i;
 *       }
 *   - console.log(`The sum of the integers between 1 and ${num} is ${sum}`);
 * - else if (sumOrProduct === 'p') {
 *     for (let i = 1; i <= num; i += 1) {
 *       product *= i
 *     }
 *     console.log(`The product of the integers between 1 and ${num} is ${product}.)
 *   }
 */

// let rlSync = require('readline-sync');
// let userNum = -1;
// let sumOrProduct = '';

// function requestUserNumber() {
//  return Number(rlSync.question('Please enter an integer greater than 0: '));
// }

// function requestOperation() {
//   return (rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. '))
//                 .toLowerCase();
// }

// while (userNum < 0) {
//   userNum = requestUserNumber();  
// }

// while (sumOrProduct !== 's' && sumOrProduct !== 'p') {
//   sumOrProduct = requestOperation();
// }

// let sum = 0;
// let product = 1;

// if (sumOrProduct === 's') {
//   for (let i = 1; i <= userNum; i += 1) {
//     sum += i;
//   }

//   console.log(`The sum of the integers between 1 and ${userNum} is ${sum}`);
// } else if (sumOrProduct === 'p') {
//   for (let i = 1; i <= userNum; i += 1) {
//     product *= i;
//   }

//   console.log(`The product of the integers between 1 and ${userNum} is ${product}.`);
// } else {
//   console.log('Error. Invalid input.');
// }

/**
 * PROBLEM (Further Exploration):
 * What if the input was an array of integers instead of just a single integer?
 * How would your computeSum and computeProduct functions change? Given that the
 * input is an array, how might you make use of the Array.prototype.reduce()
 * method?
 *  
 * Input:
 * Array of integers
 * 
 * Output:
 * A string logged to the console: The sum or product (depending on string entered
 * by user) of all numbers between 1 and the supplied integer, inclusive.
 * 
 * Rules:
 * - Must use Array.prototype.reduce() method 
 * 
 * EXAMPLES/TEST CASES:
 * Please enter an array comprised of integers greater than 0: [ 1, 2, 3 ]
 * Enter "s" to compute the sum, or "p" to compute the product. s
 * 
 * The sum of the integers within the array, [1, 2, 3], is 6.
 * 
 * Please enter an array comprised of integers greater than 0: [ 1, 2, 3 ]
 * Enter "s" to compute the sum, or "p" to compute the product. p
 * 
 * The product of the integers within the array, [4, 5, 6], is 120.
 * 
 * 
 * DATA STRUCTURE:
 * The program will use Array, Number, and String data types.
 * 
 * 
 * ALGORITHM:
 * - Initialize a new variable, rlSync, and set it equal to the return value of
 *   invoking require(readline-sync)
 * - Initialize a new variable, userNum, and set it equal to -1
 * - Initialize a new variable, sumOrProduct, and set it equal to ''
 * - Declare a function, requestUserNumber, which returns the value returned by
 *   invoking the .question() method on rlSync
 *   - return rlSync.question('Please enter an array comprised of integers greater than 0: ')
 * - Declare a function, requestOperation, which returns the value returned by
 *   invoking the `.question()` method on `rlSync`
 *   - return rlSync.question('Enter "s" to compute the sum, or "p" to compute
 *     the product. ')
 * - Initialize a while loop for userNum input validation
 *   while (userNum < 0) { userNum = requestUserNumber() }
 * - Initialize a while loop for sumOrProduct input validation
 *   while (sumOrProduct !== 's' && sumOrProduct !== 'p') { sumOrProduct = requestOperation() } 
 * - Initialize a new variable, `sum`, and set it equal to 0
 * - Initialize a new variable, `product`, and set it equal to 1
 * - If sumOrProduct === 's':
 *    product = arr.reduce(
 *      (accumulator, currentValue) => accumulator * currentValue,
 *     1
 *    )
 *   - console.log(`The sum of the integers within the array, [ ${arr.join()} ], is ${sum}.`);
 * - else if (sumOrProduct === 'p') {
 *    product = arr.reduce(
 *      (accumulator, currentValue) => accumulator * currentValue,
 *      1
 *    )
 *     console.log(`The product of the integers within the array, [ ${arr.join()} ], is ${product}.)
 *   }
 */


let rlSync = require('readline-sync');
let arr = [];
let sumOrProduct = '';

function requestUserArray() {
  return rlSync.question('Please enter a comma-separated list of integers greater than 0: ')
               .split(", ")
               .map(el => Number(el));
}

function requestOperation() {
  return (rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. '))
                .toLowerCase();
}

while (arr.some(el => el < 0) || arr.length < 1) {
  arr = requestUserArray();
}

while (sumOrProduct !== 's' && sumOrProduct !== 'p') {
  sumOrProduct = requestOperation();
}

let sum = 0;
let product = 0;

if (sumOrProduct === 's') {
  sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )

  console.log(`The sum of the integers within the array, [ ${arr.join(', ')} ], is ${sum}`);
} else if (sumOrProduct === 'p') {
  product = arr.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  )

  console.log(`The product of the integers within the array, [ ${arr.join(', ')} ], is ${product}.`);
} else {
  console.log('Error. Invalid input.');
}