/**
 * PROBLEM:
 * Given a string that consists of some words and an assortment of
 * non-alphabetic characters, write a function that returns that string with all
 * of the non-alphabetic characters replaced by spaces. If one or more
 * non-alphabetic characters occur in a row, you should only have one space in
 * the result (i.e., the result string should never have consecutive spaces).
 *
 * Input:
 * String
 *
 * Output:
 * Altered String
 *
 * Rules:
 * Result string should never have consecutive spaces
 *
 *
 * EXAMPLES/TEST CASES:
 * See below
 *
 *
 * DATA STRUCTURE:
 * String data type
 *
 *
 * ALGORITHM:
 * - Replace all non a-z/gi chars with ' '
 * - Then replace all whitespace groups with a single space
 */

function cleanUp(str) {
  return str.replace(/[^a-z]/gi, ' ').replace(/\s+/g, ' ');
}

console.log(cleanUp("---what's my +*& line?") === " what s my line ");    // true