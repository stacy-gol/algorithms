/*https://leetcode.com/problems/intersection-of-two-arrays-ii/description/

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let i = 0;
    let j = 0;
    let newArr = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            newArr.push(nums1[i])
            i++;
            j++;
        }
        else if (nums1[i] < nums2[j]) {
            i++;
        } else j++
    }
    return newArr;
};