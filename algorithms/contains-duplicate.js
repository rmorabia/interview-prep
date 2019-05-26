// Leetcode Problem: https://leetcode.com/problems/contains-duplicate/
// Repl: https://repl.it/@rmorabia/RadTwitch2

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const set = new Set(nums)
  if (set.size < nums.length) {
    return true
  } else {
    return false
  }
}