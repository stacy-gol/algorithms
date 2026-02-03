/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let write = 0;
    for (let read = 0; read < nums.length; read++) {
        if (nums[read] !== nums[read - 1]) {
            nums[write] = nums[read];
            write++;
        }  
    } return write;
};