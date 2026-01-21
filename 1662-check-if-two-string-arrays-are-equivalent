/* https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string. */




// это сделала со встроенным методом js
var arrayStringsAreEqual = function(word1, word2) {
    if (word1.join("") === word2.join("")) {
        return true;
    }
    return false
};

var arrayStringsAreEqual = function (word1, word2) {
    let i2 = 0;
    let j2 = 0;
    for (let i1 = 0; i1 < word1.length; i1++) {
        for (let j1 = 0; j1 < word1[i1].length; j1++) {

            if (i2 >= word2.length) {
                return false
            }

            if (word1[i1][j1] != word2[i2][j2]) {
                return false;
            }

            j2++;
            if (j2 >= word2[i2].length) {
                i2++;
                j2 = 0;
            }
 
        }    
    }
    return (i2 == word2.length);
}
