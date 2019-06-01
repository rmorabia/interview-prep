// Leetcode: https://leetcode.com/problems/palindrome-linked-list

// Notes:
// My solution failed. I don't know LL well enough yet.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head) { return true }
  let current = head
  let reversedList = null
  while (current) {
    if (!reversedList) {
      reversedList = current
      //reversedList.next = null
    } else {
      push(current, reversedList)
    }
    current = current.next
  }
  console.log(reversedList)
  let newCurrent = head
  while (newCurrent) {
    if (newCurrent.val !== reversedList.val) {
      return false
    }
    newCurrent = newCurrent.next
    reversedList = reversedList.next
  }
  return true
};

function push (current, reversedList) {
  let previous = reversedList.val
  reversedList.val = current.val
  reversedList.next = previous
}
