/**
 * We wrote a neutralize function that removes negative words from sentences.
 * However, it fails to remove all of them. What does happen? How would you fix
 * this problem?
 */

function neutralize(sentence) {
  let words = sentence.split(" ");

  words.slice().forEach(word => {
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words.splice(index, 1);
    }
  });
  return words.join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);

/**
 * Solution:
 * The issue here is that we are mutating an array as we iterate through it. The
 * solution is to iterate through a copy while mutating the original. We can do
 * this by calling `Array.prototype.slice()` on the array prior to iterating
 * through it.
 */