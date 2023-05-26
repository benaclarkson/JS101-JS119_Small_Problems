/**
 * As seen in the previous exercise, the time of day can be represented as the
 * number of minutes before or after midnight. If the number of minutes is
 * positive, the time is after midnight. If the number of minutes is negative,
 * the time is before midnight.
 *
 * Write two functions that each take a time of day in 24 hour format, and
 * return the number of minutes before and after midnight, respectively. Both
 * functions should return a value in the range 0..1439.
 *
 * You may not use javascript's Date class methods.
 *
 *
 * Problem:
 * Given a string, return an integer representing the number of minutes before
 * or after midnight (two different functions).
 *
 * After Midnight
 * Input: String
 * Output: Integer
 *
 * Rules:
 * - Cannot use JS's Date class methods.
 * - Return number of minutes after midnight
 *
 *
 * Example cases given below
 *
 *
 * Data Structure
 * - None obvious
 *
 *
 * Algorithm:
 * - Split string on color and convert each element to number
 * - Guard clause for 0 and for 24
 * - Multiply hours by 60
 * - Add to minutes
 * - Return the value
 *
 *
 * Before Midnight
 * Input: String
 * Output: Integer
 *
 * Rules:
 * - Cannot use JS's Date class methods.
 * - Return number of minutes before midnight
 *
 *
 * Example cases given below
 *
 *
 * Data Structure
 * - None obvious
 *
 *
 * Algorithm:
 * - Split string on color and convert each element to number
 * - Guard clause for 0 and for 24
 * - Subtract hours from 24 and mulitply by 60
 * - Add to minutes
 * - Return the value
 */

const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

function afterMidnight(time) {
  let [hours, minutes] = time.split(":").map(el => +(el));
  if (hours === HOURS_IN_DAY) return 0;

  return (hours * MINUTES_IN_HOUR) + minutes;
}

function beforeMidnight(time) {
  let totalMinutes = MINUTES_IN_DAY - afterMidnight(time);
  if (totalMinutes === MINUTES_IN_DAY) return 0;

  return totalMinutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);