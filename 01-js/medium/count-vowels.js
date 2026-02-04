/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
  -`npm run test-count-vowels`
*/

function countVowels(str) {
  // Your code here
  const vowels = "AEIOUaeiou";
  let count = 0;
  for (const ch of str) {
    if (vowels.includes(ch)) count++;
  }
  return count;
}

module.exports = countVowels;