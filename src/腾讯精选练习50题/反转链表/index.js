/*
    反转一个单链表。

    示例:
        输入: 1->2->3->4->5->NULL
        输出: 5->4->3->2->1->NULL
*/
/*
 * @lc app=leetcode id=206 lang=javascript
 *
 *
 */
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
 *  思路：
 *     迭代 + 数据交换
 */
var reverseList = function(head) {
    if (!head || !head.next) return head

    let cur = head
    let pre = null

    while (cur) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }

    return pre
}

var head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}

console.log(reverseList(head))