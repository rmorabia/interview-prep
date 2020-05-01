// LeetCode link: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3284/
/* Problem:
Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.
*/

const n = 3
// Output is supposed to be false

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let nArray = n.toString().split('')
    const history = new Set()
    
    while (true) {
        if (n === 1) return true
        
        history.add(n)
        
        currentSum = 0
                
        for (let i = 0; i < nArray.length; i++) {
            currentSum += nArray[i] * nArray[i]
        }
        
        n = currentSum
        nArray = n.toString().split('')
        
        if (n === 1) return true
        if (history.has(n)) return false
    } 
};

