/* https://leetcode.com/problems/find-missing-elements/
You are given an integer array nums consisting of unique integers.

Originally, nums contained every integer within a certain range. However, some integers might have gone missing from the array.

The smallest and largest integers of the original range are still present in nums.

Return a sorted list of all the missing integers in this range. If no integers are missing, return an empty list.*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
    nums.sort((a, b) => a - b)
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] - nums[i] > 1) {
            for (let j = nums[i] + 1; j < nums[i + 1]; j++) {
                result.push(j)
            }
        }
    } return result;
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
    let min = 10000;
    let max = - 1;
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    let arr = new Array(max).fill(-1);
    for (let i = 0; i < nums.length; i++) {
        arr[nums[i]] = nums[i]
    }
    for (let i = min; i < arr.length; i++) {
        if (arr[i] === -1) {
            result.push(i)
        }
    } return result;

};