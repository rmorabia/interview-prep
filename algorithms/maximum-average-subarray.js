// Leetcode: https://leetcode.com/problems/maximum-average-subarray-i/
// Repl: https://repl.it/@rmorabia/RadTwitch4

var findMaxAverage = function(nums, k) {
  let maximumSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < (nums.length - k + 1); i++) {
    let currentSum = 0
    for (let j = i; j < i + k; j++) {
      currentSum += nums[j]
    }
    if (currentSum > maximumSum) {
      maximumSum = currentSum
    }
    currentSum = 0
  }
  
  return maximumSum / k

};
