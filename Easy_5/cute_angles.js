/**
 * Write a function that takes a floating point number representing an angle
 * between 0 and 360 degrees and returns a string representing that angle in
 * degrees, minutes, and seconds. You should use a degree symbol (˚) to
 * represent degrees, a single quote (') to represent minutes, and a double
 * quote (") to represent seconds. There are 60 minutes in a degree, and 60
 * seconds in a minute.
 *
 *
 * Problem:
 * Given a floating point number, return a string representing that angle in
 * degrees, minutes, and seconds.
 *
 * Input: Floating point number
 * Output: String
 *
 * Rules:
 * - 360 degrees available
 * - Anything after decimal is turned to minutes (decimal * 60)
 *
 *
 * Examples case given below
 *
 *
 * Data Structure:
 * - Will employ array as output after parsing input decimal
 *
 *
 * Algorithm:
 * - Separate left side of decimal from right side of decimal and save as
 *   separate variables
 * - Degrees is left side
 * - Take what is left, multiply by 60
 * - Parse left and right side again
 * - Minutes is left side
 * - Right side * 60 is seconds
 * - Return string interpolating all those variables into output
 */

function parseDecimal(num) {
  let integer = Math.trunc(num);
  let decimal = num - integer;

  return [integer, decimal];
}

function padZeroes(num) {
  let numString = String(num);
  return numString.length < 2 ? `0${numString}` : numString;
}

function validDegree(deg) {
  if (deg > 360) {
    deg -= 360;
  } else if (deg < 0) {
    while (deg < 0) {
      deg += 360;
    }
  }

  return deg;
}

function dms(num) {
  const MINUTES_AND_SECONDS = 60;
  let degrees;
  let decimal;
  let minutes;
  let seconds;

  [degrees, decimal] = parseDecimal(num);
  degrees = validDegree(degrees);

  [minutes, decimal] = parseDecimal(decimal * MINUTES_AND_SECONDS);
  seconds = Math.trunc(decimal * MINUTES_AND_SECONDS);

  return `${degrees}°${padZeroes(minutes)}'${padZeroes(seconds)}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));           // -1°00'00"
console.log(dms(400));          // 400°00'00"
console.log(dms(-40));          // -40°00'00"
console.log(dms(-420));         // 420°00'00"