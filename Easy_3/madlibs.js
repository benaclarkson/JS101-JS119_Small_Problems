/**
 * PROBLEM:
 * Madlibs is a simple game where you create a story template with "blanks" for
 * words. You, or another player, then construct a list of words and place them
 * into the story, creating an often silly or funny story as a result.
 *
 * Create a simple madlib program that prompts for a noun, a verb, an adverb,
 * and an adjective, and injects them into a story that you create.
 *
 * Input:
 * Strings from user
 *
 * Output:
 * A few strings of output using input strings
 *
 *
 * EXAMPLES/TEST CASES:
 * Enter a noun: dog
 * Enter a verb: walk
 * Enter an adjective: blue
 * Enter an adverb: quickly
 *
 * // console output
 * Do you walk your blue dog quickly? That's hilarious!
 * The blue dog walks quickly over the lazy dog.
 * The dog quickly walks up blue Joe's turtle.
 *
 *
 * DATA STRUCTURE:
 * Strings and string interpolation
 *
 *
 * ALGORITHM:
 * -
 */

const READLINE = require('readline-sync');

let noun = READLINE.question('Enter a noun: ');
let verb = READLINE.question('Enter a verb: ');
let adjective = READLINE.question('Enter an adjective: ');
let adverb = READLINE.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);