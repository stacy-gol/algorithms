/* https://leetcode.com/problems/counting-words-with-a-given-prefix/description/
You are given an array of strings words and a string pref.

Return the number of strings in words that contain pref as a prefix.

A prefix of a string s is any leading contiguous substring of s.*/

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    let result = 0;
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        let matches = true;
        for (let k = 0; k < pref.length; k++) {
            if (word[k] !== pref[k]) {
                matches = false;
                break;
            }
        }
        if (matches)
        {
            result++;
        }
    } return result;
};