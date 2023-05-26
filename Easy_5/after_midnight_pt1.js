/**
 * The time of day can be represented as the number of minutes before or after
 * midnight. If the number of minutes is positive, the time is after midnight.
 * If the number of minutes is negative, the time is before midnight
 *
 * Write a function that takes a time using this minute-based format and returns
 * the time of day in 24 hour format (hh:mm). Your function should work with any
 * integer input.
 *
 * You may not use javascript's Date class methods.
 *
 *
 * Problem:
 * Given a positive or negative integer representing minutes, return a string
 * representing the time before or after midnight in 24 hour format (hh:mm).
 *
 * Rules
 * - The tests below should log true.
 * - Disregard Daylight Savings and Standard Time and other complications.
 * - If number of minutes input is positive, the time is after midnight
 * - If number of minutes input is negative, the time is before midnight
 * - Cannot use JS's Date class methods
 *
 * Questions
 * - Will input always be valid positive or negative integer?
 *
 *
 * Example cases given below
 *
 *
 * Data Structure:
 * No array or object used
 *
 *
 * Algorithm:
 * - Guard clause to return "00:00" if input is `0`
 * - If input is less than or equal to 60 and great
 * - Divide input by 60 to obtain number of hours
 *   - Truncate to just have hours
 * - Subtract truncated number from original divided number
 *   - Save as
 */

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");