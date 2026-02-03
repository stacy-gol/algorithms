/* https://leetcode.com/problems/count-the-number-of-consistent-strings/description/
You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.*/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let result = 0;
  for (let j = 0; j < words.length; ++j) {
    let word = words[j];
    let isConsistent = true;
    for (let k = 0; k < word.length; ++k) {
      let isInAllowed = false;
      for (let i = 0; i < allowed.length; ++i)
        for (let letter2 in allowed) {
          if (word[k] == allowed[i]) {
            isInAllowed = true;
            break;
          }
        }

      if (!isInAllowed) {
        isConsistent = false;
        break;
      }
    }
    if (isConsistent) {
      result++;
    }
  }
  return result;
};
