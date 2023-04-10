/**
 * PROBLEM:
 * A double number is an even-length number whose left-side digits are exactly
 * the same as its right-side digits. For example, 44, 3333, 103103, and 7676
 * are all double numbers, whereas 444, 334433, and 107 are not.
 *
 * Write a function that returns the number provided as an argument multiplied
 * by two, unless the argument is a double number; otherwise, return the double
 * number as-is.
 *
 * Input:
 * Number
 *
 * Output:
 * Input multiplied by 2, unless input is double number. If so, return input.
 *
 * Rules:
 * - Will input always be positive?
 *
 *
 * EXAMPLES/TEST CASES:
 * See below
 *
 *
 * DATA STRUCTURE:
 * String and Number data types
 *
 *
 * ALGORITHM:
 * - Convert input toString and store in variable, strInput
 * - If input length is odd, return input * 2
 * - Otherwise, split the string down the middle and store in array.
 *   - If arr[0] === arr[1], return input
 *   - If not, return input * 2
 */

function twice(num) {
  let strInput = num.toString();

  if (strInput.length % 2 === 1) return num * 2;

  let arrInput = [
    strInput.substring(0, (strInput.length / 2)),
    strInput.substring((strInput.length / 2))
  ];

  if (arrInput[0] === arrInput[1]) {
    return num;
  } else {
    return num * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676