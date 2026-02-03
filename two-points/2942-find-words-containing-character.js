/*https://leetcode.com/problems/find-words-containing-character/

You are given a 0-indexed array of strings words and a character x.

Return an array of indices representing the words that contain the character x.

Note that the returned array may be in any order.

*/

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        for (let j = 0; j < word.length; j++) {
            if (word[j] === x) {
                result.push(i);
                break;
            }
        }
    } return result;
};