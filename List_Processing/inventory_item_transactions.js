/**
 * Write a function that takes two arguments, an inventory item ID and a list of
 * transactions, and returns an array containing only the transactions for the
 * specified inventory item.
 *
 *
 * Problem:
 * Given an integer and an array of objects, return an array containing only the
 * transactions for the specified inventory item.
 *
 * Input: Array
 * Output: Array
 *
 * Questions:
 * - Mutate original array or return new array?
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
 * **Assuming new array returned**
 * - Declare new variable, result, and initialize it to an empty array
 * - Iterate over array
 *   - If id matches givenID, store it in result
 * - Return result
 */

function transactionsFor(givenID, givenTransactions) {
  return givenTransactions.filter(transaction => transaction.id === givenID);
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

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]