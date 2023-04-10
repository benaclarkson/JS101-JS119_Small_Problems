/**
 * PROBLEM:
 * Write a function that takes a year as input and returns the century. The
 * return value should be a string that begins with the century number, and ends
 * with 'st', 'nd', 'rd', or 'th' as appropriate for that number.
 *
 * New centuries begin in years that end with 01. So, the years 1901 - 2000'
 * comprise the 20th century.
 *
 * Input:
 * Integer representing a year
 *
 * Output:
 * String representing the century the year is in
 *
 * Rules:
 * - Output must end with 'st', 'nd', 'rd', or 'th' as appropriate.
 * - New centuries begin when the year ends in 01.
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
 * - Divide the year by 100 and round up. Save to variable.
 * - Check if the working century ends in 11, 12, or 13.
 *   - If so, add 'th' to the end and return it
 * - Check the last char in the working century and apply the prop suffix
 */

function century(year) {
  let cent = Math.ceil(year / 100).toString();

  if (['11', '12', '13'].includes(cent.substring(cent.length - 2))) {
    return cent + 'th';
  }

  switch (cent[cent.length - 1]) {
    case '1':
      return cent + 'st';
    case '2':
      return cent + 'nd';
    case '3':
      return cent + 'rd';
    default:
      return cent + 'th';
  }
}

console.log(century(2000) === "20th");
console.log(century(2001) === "21st");
console.log(century(1965) === "20th");
console.log(century(256) === "3rd");
console.log(century(5) === "1st");
console.log(century(10103) === "102nd");
console.log(century(1052) === "11th");
console.log(century(1127) === "12th");
console.log(century(11201) === "113th");