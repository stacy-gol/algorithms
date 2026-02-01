/* https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/

In the town of Digitville, there was a list of numbers called nums containing integers from 0 to n - 1. Each number was supposed to appear exactly once in the list, however, two mischievous numbers sneaked in an additional time, making the list longer than usual.

As the town detective, your task is to find these two sneaky numbers. Return an array of size two containing the two numbers (in any order), so peace can return to Digitville.*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    for (i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i+1]) {
            result.push(nums[i])
        }
    }
    return result;
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {

    let result = [];
    let arr = new Array(nums.length).fill(-1);

    for (i = 0; i < nums.length; i++) {
        if (arr[nums[i]] === -1) {
            arr[nums[i]] = nums[i];
        } else {
            result.push(nums[i])
        }
    }
    return result;
};