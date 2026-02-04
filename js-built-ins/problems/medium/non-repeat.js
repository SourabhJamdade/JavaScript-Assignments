/*
  Write a function `nonrepeat` which takes a string as input and returns the first non-repeating character in the string.

  What is a non-repeating character?
  - A character that appears only once in the entire string.

  Example:
  - Input: "abcab"
  - Output: "c"

  - Input: "aabbcc"
  - Output: null

  - Input: "abcdef"
  - Output: "a"

  - Input: ""
  - Output: null

  Once you've implemented the logic, test your code by running
  - `npm run test-nonrepeat`
*/
function nonrepeat(str) {
  // Your code here
  //   for (let char of str) {
  //     console.log(str.indexOf(char), str.lastIndexOf(char));

  //     if (str.indexOf(char) === str.lastIndexOf(char)) {
  //       return char;
  //     }
  //   }
  //   return null;

  // Your code here
  let arr = str.split("");
  let arr2 = [];
  for (const ch of arr) {
    let count = 0;
    for (const ch1 of arr) {
      if (ch === ch1) {
        count++;
      }
    }
    if (count == 1) {
      arr2.push(ch);
      break;
    }
  }
  if (arr2.length === 0) return null;
  return arr2.join("");
}
module.exports = nonrepeat;
