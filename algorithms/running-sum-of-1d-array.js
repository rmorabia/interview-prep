/* 
Leetcode link: https://leetcode.com/problems/running-sum-of-1d-array/

Problem:

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*/

const nums = [3,1,2,10,1]]
// Output is supposed to be [3,4,6,16,17]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const arr = []
    const runningSum = nums.reduce((acc, num) => {
        arr.push(acc + num)
        return acc + num
    }, 0)
    return arr
};
