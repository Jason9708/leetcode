/*
    给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

    为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

    说明：不允许修改给定的链表。

示例 1：
    输入：head = [3,2,0,-4], pos = 1
    输出：tail connects to node index 1
    解释：链表中有一个环，其尾部连接到第二个节点。
---------------------------------------------------
示例 2：
    输入：head = [1,2], pos = 0
    输出：tail connects to node index 0
    解释：链表中有一个环，其尾部连接到第一个节点。
---------------------------------------------------
示例 3：
    输入：head = [1], pos = -1
    输出：no cycle
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
 * @return {ListNode}
 *  思路1：标记法
 */
var detectCycle1 = function(head) {
    while (head && head.next) {
        if (head.flag) {
            return head
        } else {
            head.flag = true
            head = head.next
        }
    }
    return null
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 *  思路2：数组去重
 */
var detectCycle2 = function(head) {
    let result = []
    while (head != null) {
        if (result.includes(head)) {
            return head
        } else {
            result.push(head)
        }
        head = head.next
    }
    return null
}


let c1 = { 'val': 1, 'next': null },
    c2 = { 'val': 2, 'next': null },
    c3 = { 'val': 3, 'next': null };

c1.next = c2;
c2.next = c3;
c3.next = c2;

console.log('标记法 - ', detectCycle1(c1))
console.log('数组去重 - ', detectCycle2(c1))