// LeetCode link: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3283/
/* Problem:
   Given a non-empty array of integers, every element appears twice except for one. Find that single one.

  Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

const nums = [4,1,2,1,2]
// Output is supposed to be 4

// Family: ???
// Data Structures Used: Map/Object

var singleNumber = function(nums) {
    const count = {}
    for (let i = 0; i < nums.length; i++) {
      if (count[nums[i]]) {
        delete count[nums[i]]
      } else {
        count[nums[i]] = 1
      }
    }
  return Object.keys(count)[0]
};

// Result: I got it to O(n) time complexity and around O(1) space complexity. 
//         I was not able to implement it without using extra memory.
