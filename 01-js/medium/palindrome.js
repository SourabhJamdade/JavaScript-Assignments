/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let str1 = str.toLowerCase().split("");
  let str2 = str1
    .filter((ele) => (ele >= "a" && ele <= "z") || (ele >= "0" && ele <= "9"))
    .join("");
  let str3 = "";

  for (let i = str2.length - 1; i >= 0; i--) {
    str3 += str2[i];
  }
  return str2 == str3;
}

module.exports = isPalindrome;