//1929. Concatenation of Array - https://leetcode.com/problems/concatenation-of-array/description/ 

/*Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.*/

//1 вариант - 2 повторяющихся цикла

var getConcatenation = function (nums) {
    var ans = [];
    
    for (let i = 0; i < nums.length; i++) {
            ans.push(nums[i]);
        }
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i]);
    }
        return ans;
    }

getConcatenation([1,2,3]);

//2 вариант - цикл внутри цикла, чтобы не повторять логику

var getConcatenation = function (nums) {
    var ans = [];
    
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < nums.length; i++) {
            ans.push(nums[i]);
        }
    }
        return ans;
    }

getConcatenation([1,2,3]);
