// Leetcode Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// Repl: https://repl.it/@rmorabia/RadTwitch1

// Notes:
// My keyboard broke during this stream so I fixed it here, lol.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) { return head }

  let next = head.next
  let current = head

  while (next) {
    if (current.val === next.val) {  // checking uniqueness,,
      current.next = next.next
      next = next.next
    } else if (current.val !== next.val) {
      current = current.next
      next = next.next
    }
  }

  return head
}