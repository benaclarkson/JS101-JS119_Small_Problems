/**
 * PROBLEM:
 * The || operator returns a truthy value if either or both of its operands are
 * truthy, a falsey value if both operands are falsey. The && operator returns a
 * truthy value if both of its operands are truthy, and a falsey value if either
 * operand is falsey. This works great until you need only one, but not both, of
 * two conditions to be truthy: the so-called exclusive or.
 *
 * In this exercise, you will write a function named xor that takes two
 * arguments, and returns true if exactly one of its arguments is truthy, false
 * otherwise. Note that we are looking for a boolean result instead of a
 * truthy/falsy value as returned by || and &&.
 *
 * Input:
 * Two arguments
 *
 * Output:
 * Boolean value based on whether exactly one of the arguments is truthy and
 *   false otherwise.
 *
 * Rules:
 * - Allow for two arguments
 * - Return a Boolean value--not a truthy/falsy value
 *
 *
 * EXAMPLES/TEST CASES:
 * See below
 *
 *
 * DATA STRUCTURE:
 * We will potentially need to handle all data types in JS
 *
 *
 * ALGORITHM:
 * - Declare a function xor(value1, value2)
 * - if value1 is false and value2 is true OR if value1 is true and value2 is
 *   false, return true
 * - Otherwise, return false
 */

function xor(value1, value2) {
  if ((!value1 && value2) ||
      (value1 && !value2)) {
    return true;
  }

  return false;
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true