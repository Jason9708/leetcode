/*
    给定一个链表，判断链表中是否有环。

    为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

示例 1：
    输入：head = [3,2,0,-4], pos = 1
    输出：true
    解释：链表中有一个环，其尾部连接到第二个节点。
------------------------------------------------------
示例 2：
    输入：head = [1,2], pos = 0
    输出：true
    解释：链表中有一个环，其尾部连接到第一个节点。
-------------------------------------------------------
示例 3：
    输入：head = [1], pos = -1
    输出：false
    解释：链表中没有环。
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
 * @return {boolean}
 *  思路1 ： 标记法
 */
var hasCycle1 = function(head) {
    while (head) {
        if (head.flag === true) return true
        else head.flag = true

        head = head.next
    }
    return false
}

/**
 * @param {ListNode} head
 * @return {boolean}
 *  思路思路2 ： 快慢指针
 *      （双指针法）设置一快一慢两个指针
 *          - 快指针一次走两步到.next.next
 *          - 慢指针一次走一步到.next
 *          - 如果链表不存在环形结构，那么快指针和慢指针不会相遇。
 *          - 如果存在环形结构，快指针总会和慢指针相遇
 */
var hasCycle2 = function(head) {
    if (head === null || head.next === null) return false

    var slow = head
    var fast = head.next

    while (slow != fast) {
        if (fast === null || fast.next === null) return false
        slow = slow.next
        fast = fast.next.next
    }

    return true
}


let c1 = { 'val': 1, 'next': null },
    c2 = { 'val': 2, 'next': null },
    c3 = { 'val': 3, 'next': null };

c1.next = c2;
c2.next = c3;
c3.next = c2;

console.log(hasCycle1(c1))

console.log(hasCycle2(c1))