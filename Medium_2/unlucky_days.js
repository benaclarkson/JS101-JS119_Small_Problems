/**
 * Some people believe that Fridays that fall on the 13th day of the month are
 * unlucky days. Write a function that takes a year as an argument and returns
 * the number of Friday the 13ths in that year. You may assume that the year is
 * greater than 1752, which is when the United Kingdom adopted the modern
 * Gregorian Calendar. You may also assume that the same calendar will remain in
 * use for the foreseeable future.
 *
 *
 * Problem:
 * Given a 4 digit number (a year) determine how many Friday the 13ths occur in
 * the given year and return that count.
 *
 * Input: 4 digits number (a year)
 * Output: Number of Friday the 13ths that occur in that year
 *
 * Rules:
 * - Given years will occur after 1752 (when Gregorian calendar was adopted)
 *
 *
 * Examples/Test Cases:
 * - Given below
 *
 *
 * Data Structure:
 * - Date object
 *
 *
 * Algorithm:
 * - Iterate over months of the given year
 * - Determine what day the 13th falls on
 * - If it is a Friday, add to the count
 * - Return count
 */

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];
const UNLUCKY = 13;
const FRIDAY = 5;

function fridayThe13ths(year) {
  let unluckyDays = 0;
  let fullDate = new Date();
  fullDate.setFullYear(year);
  fullDate.setDate(UNLUCKY);

  MONTHS.forEach(month => {
    fullDate.setMonth(MONTHS.indexOf(month));
    if (fullDate.getDay() === FRIDAY) unluckyDays += 1;
  });

  return unluckyDays;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2