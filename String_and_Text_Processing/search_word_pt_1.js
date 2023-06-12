/**
 * Write a function that takes two arguments, a word and a string of text, and
 * returns an integer representing the number of times the word appears in the
 * text.
 *
 * You may assume that the word and text inputs will always be provided, and
 * that all word breaks are spaces. Thus, some words will include punctuation
 * such as periods and commas. Also assume that the search is case-insensitive.
 *
 *
 * Problem:
 * Given a word and string of text, return an integer representing the number of
 * times the given word appears in the text.
 *
 * Input: Two strings
 * Output: Integer
 *
 * Rules:
 * - Words may have punctuation
 * - Matches are case-insensitive
 *
 *
 * Examples/Tests:
 * - Given below
 *
 *
 * Data Structure:
 * - Array
 *
 *
 * Algorithm:
 * - Declare a variable, result, and initialize it to 0
 * - Remove all punctuation from text
 * - Split text on spaces
 * - Iterate over array of words
 *   - If given word, matches current element, increment result by 1
 *   - Otherwise, continue
 * - Return result
 */

// Solution 1
// function searchWord(word, words) {
//   let result = 0;

//   words
//     .replace(/[^a-z ]/gi, '')
//     .split(' ')
//     .forEach(wordElement => {
//       if (word.toLowerCase() === wordElement.toLowerCase()) {
//         result += 1;
//       }
//     });

//   return result;
// }

// Solution 2
function searchWord(word, text) {
  const regex = new RegExp(` ${word} `, 'gi');
  const matches = text.match(regex);

  return matches ? matches.length : 0;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('qui', text));      // 3