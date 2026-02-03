/* https://leetcode.com/problems/find-the-integer-added-to-array-i/

You are given two arrays of equal length, nums1 and nums2.

Each element in nums1 has been increased (or decreased in the case of negative) by an integer, represented by the variable x.

As a result, nums1 becomes equal to nums2. Two arrays are considered equal when they contain the same integers with the same frequencies.

Return the integer x.*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b)
    let x = 0;
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            x = nums2[j] - nums1[i]
        }
    }
    return x;
};