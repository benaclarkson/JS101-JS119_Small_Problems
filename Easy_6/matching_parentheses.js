/**
 * Write a function that takes a string as an argument and returns true if all
 * parentheses in the string are properly balanced, false otherwise. To be
 * properly balanced, parentheses must occur in matching '(' and ')' pairs.
 *
 * The tests below should log true.
 *
 * Note that balanced pairs must each start with a (, not a ).
 *
 * Problem:
 * Given a string, determine if all parentheses within the string are balanced.
 * If so, return true. If false, return false.
 *
 * Rules:
 * - Balanced pairs contain '(' and ')'
 * - If ')' is encountered before '(', automatically return false
 * - Lack of parentheses results in true
 *
 *
 * Examples given below
 *
 *
 * Data Structure:
 * - Array
 *
 *
 * Algorithm:
 * - Split string into collection of chars and store in variable
 * - Create constant for '('
 * - Create constant for ')'
 * - Create variable to track opening count
 * - Create variable to track closing count
 * - Iterate through array of chars
 *   - If char is opening, increase opening count
 *   - If char is closing, increase closing count
 *   - If closing is greater than 1 and opening is 0, return false
 * - Return the result of comparing opening and closing count
 */

function isBalanced(str) {
  const OPENING = '(';
  const CLOSING = ')';
  let openingCount = 0;
  let closingCount = 0;

  for (let char of str) {
    if (char === OPENING) {
      openingCount += 1;
    } else if (char === CLOSING) {
      closingCount += 1;
    }

    if (closingCount > openingCount) return false;
  }

  return openingCount === closingCount;
}


// Further Exploration

function isBalanced(str) {
  const OPENING = ['(', '[', '{', ];
  const CLOSING = ')';
  let openingCount = 0;
  let closingCount = 0;

  for (let char of str) {
    if (char === OPENING) {
      openingCount += 1;
    } else if (char === CLOSING) {
      closingCount += 1;
    }

    if (closingCount > openingCount) return false;
  }

  return openingCount === closingCount;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);