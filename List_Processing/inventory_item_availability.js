/**
 * Building on the previous exercise, write a function that returns true or
 * false based on whether or not an inventory item is available. As before, the
 * function takes two arguments: an inventory item and a list of transactions.
 * The function should return true only if the sum of the quantity values of the
 * item's transactions is greater than zero. Notice that there is a movement
 * property in each transaction object. A movement value of 'out' will decrease
 * the item's quantity.
 *
 * You may (and should) use the transactionsFor function from the previous
 * exercise.
 *
 *
 * Problem:
 * Given an array of objects, return a boolean based on whether there is
 * inventory available.
 *
 * Input: Array
 * Output: Boolean
 *
 * Rules:
 * - Movement in is increased qty
 * - Movement out is decreased qty
 *
 * Questions:
 * - May I mutate the original array?
 *
 *
 * Examples/Tests:
 * - Given below
 *
 *
 * Data Structure:
 * - Array & Object
 *
 *
 * Algorithm:
 * - Declare a new variable, totalQty, and initialize it to 0
 * - Filter array using transactionsFor function
 * - Iterate over filtered array
 *   - If movement is in
 *     - Increment totalQty by quantity amount
 *   - If movement is out
 *     - Decrement totalQty by quantity amount
 * - Return if quantity is greater than 0
 */

function transactionsFor(givenID, givenTransactions) {
  return givenTransactions.filter(transaction => transaction.id === givenID);
}

// function isItemAvailable(givenID, givenTransactions) {
//   let totalQty = 0;

//   transactionsFor(givenID, givenTransactions).forEach(transaction => {
//     if (transaction.movement === 'in') {
//       totalQty += transaction.quantity;
//     } else if (transaction.movement === 'out') {
//       totalQty -= transaction.quantity;
//     }
//   });

//   return totalQty > 0;
// }

// Solution 2
function isItemAvailable(givenID, givenTransactions) {
  let totalQty = transactionsFor(givenID, givenTransactions).reduce(
    (sum, transaction) => {
      if (transaction.movement === 'in') {
        return sum + transaction.quantity;
      } else {
        return sum - transaction.quantity;
      }
    },
    0
  );

  return totalQty > 0;
}

let transactions = [
  { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },
];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true