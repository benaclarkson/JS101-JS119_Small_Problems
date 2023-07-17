/**
 * One bored and hungry evening we decided to randomly generate recipes. We
 * can't wait to see the first suggestions, but JavaScript raises a TypeError,
 * telling us that dishName.join is not a function. What is wrong?
 */

// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  let elements = array.slice();
  let randomElements = [];

  while (n > 0 && elements.length > 0) {
    let randomIndex = Math.floor(Math.random() * elements.length);
    let randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

let ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
  'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

let spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
  'poppy seed', 'cumin'];

let extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

let adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
let firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
let secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

let dishName = random(adjective) + random(firstNoun) + random(secondNoun);
let dish = random(ingredients, 3) + random(spices, 2) + random(extras, 1);

console.log('How about: ' + dishName.join(' '));
console.log('You need: ' + dish.join(', '));

/**
 * Solution:
 * On lines 47 and 48, we are using `+` to, one would assume, concatenation of
 * arrays into one array. However, what is actually happening is that each array
 * is coerced into a string, then concatenated together, resulting in `dishName`
 * and `dish` being strings, and not arrays. Thus, when the join method is
 * called on those variables, a TypeError is thrown since String does not have
 * a join method.
 */