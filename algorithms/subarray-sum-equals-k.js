
// LeetCode link: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3307/
// Problem: Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

const nums = [8, 4, 4, 2, 16, 8, 7, 6, 5, 13]
const k = 18
// Output is supposed to be 4

const nums1 = [100, 1, 2, 3, 4]
const k1 = 6
// Output is supposed to be 0

const subArraySum = (nums, k) => {
  return nums.reduce((acc, value, index) => {
    // Error #1, sum !== 0
    var sum = value
    var currIndex = index + 1

    // Error #2, need to add a stopping point here
    if (index + 1 >= nums.length - 1) {
      return acc;
    }

    while (sum < k) {
      if (sum + nums[currIndex] === k) {
        return acc + 1
      } else if (sum + nums[currIndex] > k) {
        sum += nums[currIndex]
        return acc
      } else if (sum + nums[currIndex] < k) {
        // Error #3: Add the sum before the currIndex since the sum uses the currIndex
        sum = sum + nums[currIndex]
        currIndex++
      }
    }
  }, 0)
}

// Result: Tried to do this kinda recursively, it did not work.

const subArraySumFORLOOPSINSTEAD = (nums, k) => {
  let total = 0;
  for (let n = 0; n < nums.length; n++) {
    let sum = nums[n]
    for (let i = n + 1; i < nums.length; i++) {
      sum += nums[i]
      if (sum + nums[i] === k) {
        total++
      }
    }
  }

  return total;
}

subArraySumFORLOOPSINSTEAD(nums, k)
