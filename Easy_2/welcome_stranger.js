/**
 * PROBLEM:
 * Create a function that takes 2 arguments, an array and an object. The array
 * will contain 2 or more elements that, when combined with adjoining spaces,
 * will produce a person's name. The object will contain two keys, "title" and
 * "occupation", and the appropriate values. Your function should return a
 * greeting that uses the person's full name, and mentions the person's title.
 *
 * Input:
 * Two arguments:
 * 1. Array
 *   - 2 or more elements. When combined with adjoining spaces, produces a name.
 * 2. Object
 *   - 2 keys.
 *     - "title" w/ appropriate value
 *     - "occupation" w/ appropriate value
 *
 * Output:
 * A greeting that uses person's full name and mentions the person's title.
 *
 * Rules:
 * - Array will contain two OR MORE elements. Must account for the "or more"
 * - Must mention person's name and title in greeting
 *
 *
 * EXAMPLES/TEST CASES:
 * See below
 *
 *
 * DATA STRUCTURE:
 * String interpolation
 *
 *
 * ALGORITHM:
 * - Declare a function that allows for 2 params, name and occupationSpecs
 * - return `Hello, ${name.join(' ')}! Nice to have a ${occupationSpecs.title}
 *   ${occupationSpecs.occupation} around.`
 */

function greetings(name, occupationSpecs) {
  return `Hello, ${name.join(' ')}! Nice to have a ${occupationSpecs.title} ${occupationSpecs.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.