/**
 * https://leetcode.com/problems/richest-customer-wealth/description/
 You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
 */
var maximumWealth = function (accounts) {
    let maxSum = 0;
    for (i = 0; i < accounts.length; i++) {
        let sum = 0;
        let client = accounts[i];
        for (let bank of client) {
            sum += bank;
        }
        if (sum > maxSum) {
            maxSum = sum;
        }
        maxSum = Math.max(maxSum, sum);

    } return maxSum
};