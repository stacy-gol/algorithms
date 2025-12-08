/* https://leetcode.com/problems/smallest-index-with-equal-value/description/

Given a 0-indexed integer array nums, return the smallest index i of nums such that i mod 10 == nums[i], or -1 if such index does not exist.

x mod y denotes the remainder when x is divided by y. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    for(i = 0; i < nums.length; i++) {
        if (i%10 == nums[i]) {
            return nums[i];
        }
    }
    return -1;
};