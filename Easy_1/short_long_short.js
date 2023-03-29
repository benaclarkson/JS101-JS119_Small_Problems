/**
 * PROBLEM:
 * Write a function that takes two strings as arguments, determines the length
 * of the two strings, and then returns the result of concatenating the shorter
 * string, the longer string, and the shorter string once again. You may assume
 * that the strings are of different lengths.
 * 
 * Input:
 * Two strings
 * 
 * Output:
 * shorter + longer + shorter string concatenation
 * 
 * Rules:
 * - What to do if strings are same size?
 * - What to do if strings are empty?
 * 
 * 
 * EXAMPLES/TEST CASES:
 * Examples given below in code.
 * 
 * 
 * DATA STRUCTURE:
 * String data type
 * 
 * 
 * ALGORITHM:
 * - Declare a function shortLongShort, which allows for two parameters, str1, str2
 * - Declare an if conditional -- if (str1.length > str2.length)
 *   - return str2 + str1 + str2;
 *   else {
 *     return str1 + str2 + str1;
 *   }
 */

function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    return str2 + str1 + str2;
  } else {
    return str1 + str2 + str1;
  }
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"