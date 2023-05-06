/**
 * Modify the wordSizes function from the previous exercise to exclude
 * non-letters when determining word size. For instance, the word size of "it's"
 * is 3, not 4.
 */

function wordSizes(str) {
  let result = {};
  if (str === '') return result;

  let arr = str.split(' ').map(word => word.replace(/[^\w]/g, ''));

  arr.forEach(word => {
    if (Object.keys(result).includes(word.length.toString())) {
      result[word.length] += 1;
    } else {
      result[word.length] = 1;
    }
  });

  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}