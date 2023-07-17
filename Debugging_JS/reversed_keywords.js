/**
 * We have been asked to implement a function that determines whether or not a
 * given word is a reserved keyword. We wrote the isReserved function below
 * along with some test cases, but we aren't seeing the expected result.
 * Why not? Fix the code so that it behaves as intended.
 */

const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  for (let idx = 0; idx < RESERVED_KEYWORDS.length; idx += 1) {
    if (name === RESERVED_KEYWORDS[idx]) {
      return true;
    }
  }

  return false;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true

/**
 * Solution:
 * The above code was not previously working because the forEach method was
 * used. With forEach, the return value is always `undefined` and every
 * iteration must complete without any stoppage due to return or break keywords
 * being used.
 * If we change the function to use a standard for loop and adjust how the
 * current RESERVED_KEYWORDS element is checked, it works as expected.
 */