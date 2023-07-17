/**
 * Gemma and some friends are working on a complex program to generate word
 * ladders, transforming one word into another word one character at a time.
 * The smallest of her tasks is to print the resulting ladder to the screen.
 *
 * A "ladder" is simply an array of word strings; Gemma decides to transform
 * this array into a single string where each word within the string is
 * separated by a hyphen ('-'). For example, the array ['pig', 'pie', 'lie',
 * 'lit', 'let'] should be printed as the string 'pig-pie-lie-lit-let'.
 *
 * Upon first glance, Gemma's code below looks like it should work. But it
 * throws a TypeError, saying: Cannot read property 'forEach' of undefined.
 * Why is that?
 */

let ladder = ''

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

/**
 * Solution:
 * The issue lies on `line 16`. Due to the fact that there is no semicolon
 * terminating the line. JS places a semicolon where it thinks it should go,
 * which is what causes the error.
 */