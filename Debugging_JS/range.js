/**
 * We are assigned the task to implement a range function that returns an array
 * of integers beginning and ending with specified start and end numbers. When
 * only a single argument is provided, that argument should be used as the
 * ending number and the starting number should be 0.
 *
 * Check our code below. Why do the example invocations fail with an error
 * saying Maximum call stack size exceeded? Can you fix the code, so it runs
 * without error and satisfies the requirements?
 */

function range(start, end = -1) {
  if (end === -1) {
    end = start;
    start = 0;
  }

  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5));

/**
 * Solution:
 * The original code contained two function declarations, which caused an issue
 * since only one was called initially. When the second recursive call is made,
 * the function just continually calls itself with no endpoint.
 * In addition to that, the `end` and `start` variables were not set up to
 * correctly account for only one argument resulting in the argument being
 * assigned to the local variable `end` within the function and `start` being
 * assigned to `0`.
 */