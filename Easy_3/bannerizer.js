/**
 * PROBLEM:
 * Write a function that will take a short line of text, and write it to the
 * console log within a box.
 *
 * Input:
 * String (empty allowed)
 *
 * Output:
 * String in a box
 *
 * Rules:
 * - You may assume that the output will always fit in your browser window.
 *
 *
 * EXAMPLES/TEST CASES:
 * logInBox('To boldly go where no one has gone before.');
 *
 * +--------------------------------------------+
 * |                                            |
 * | To boldly go where no one has gone before. |
 * |                                            |
 * +--------------------------------------------+
 *
 * logInBox('');
 *
 * +--+
 * |  |
 * |  |
 * |  |
 * +--+
 *
 *
 * DATA STRUCTURE:
 * String data type
 *
 *
 * ALGORITHM:
 * - const LENGTH = str.length
 * - const topAndBottom = '+-' + '-'.repeat(LENGTH) + '-+'
 * - const aboveAndBelow = '|  ' + '-'.repeat(LENGTH) + '  |'
 * - const mid = `| ${str} |`
 * - Log each const in proper order
 */

function logInBox(str, maxWidth = 80) {
  if (maxWidth < str.length) {
    str = str.substring(0, maxWidth - 4);
  }

  const LENGTH = str.length;
  const TOP_AND_BOTTOM = '+-' + '-'.repeat(LENGTH) + '-+';
  const ABOVE_AND_BELOW = '| ' + ' '.repeat(LENGTH) + ' |';
  const MID = `| ${str} |`;

  console.log(TOP_AND_BOTTOM);
  console.log(ABOVE_AND_BELOW);
  console.log(MID);
  console.log(ABOVE_AND_BELOW);
  console.log(TOP_AND_BOTTOM);
}

logInBox('To boldly go where no one has gone before.');
logInBox('To boldly go where no one has gone before.', 10);
logInBox('');