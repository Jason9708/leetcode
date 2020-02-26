/*
给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

示例 1:
    输入: 1->2->3->4->5->NULL, k = 2
    输出: 4->5->1->2->3->NULL
    解释:
    向右旋转 1 步: 5->1->2->3->4->NULL
    向右旋转 2 步: 4->5->1->2->3->NULL

-----------------------------

示例 2:
    输入: 0->1->2->NULL, k = 4
    输出: 2->0->1->NULL
    解释:
    向右旋转 1 步: 2->0->1->NULL
    向右旋转 2 步: 1->2->0->NULL
    向右旋转 3 步: 0->1->2->NULL
    向右旋转 4 步: 2->0->1->NULL
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
 * @param {number} k
 * @return {ListNode}
 *      思路：
 *          第一次循环:
 *             - 记录链表长度n
 *             - 让链表闭合形成环形链表
 *          第二次循环:
 *             - 循环(k % n)次
 *             - 然后在该指针处打断环形链表, 此时return头部节点就是答案
 */
const rotateRight = (head, k) => {
    if (!head) return null

    let curr = head,
        tmp = null,
        n = 0
    while (curr) {
        n++
        if (!curr.next) {
            curr.next = head
            break
        }
        curr = curr.next
    }
    k = k % n
    while (k++ < n) {
        k === n && (tmp = head)
        head = head.next
    }
    tmp.next = null

    return head
}

var list = {
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

console.log(rotateRight(list, 2))