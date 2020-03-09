/*
编写一个程序，找到两个单链表相交的起始节点。

示例 1：
    输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
    输出：Reference of the node with value = 8
    输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
 

示例 2：
    输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
    输出：Reference of the node with value = 2
    输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 *  思路1：
 *      先遍历 headA 并把所有点打上标记，再遍历 headB，查找第一个具有标记的点，就是相交点
 */
var getIntersectionNode1 = function(headA, headB) {
    while (headA) {
        headA.flag = 1
        headA = headA.next
    }
    while (headB) {
        if (headB.flag) return headB
        headB = headB.next
    }
}


/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 *  思路2：
 *      嵌套循环
 */
var getIntersectionNode2 = function(headA, headB) {
    while (headA) {
        var temp = headB
        while (temp) {
            if (temp === headA) return headA
            temp = temp.next
        }
        headA = headA.next
    }
}


/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 *  思路3：
 *      双指针法。初始化两个指针 pA 和 pB，分别指向 headA 和 headB
 *      每次 pA 和 pB 各走一步
 *      当 pA 触底的时候，变轨到 headB
 *      当 pB 触底的时候，变轨到 headA
 *      当 pA = pB 时，就是第一个相交点
 */
var getIntersectionNode3 = function(headA, headB) {
    var pA = headA
    var pB = headB

    while (pA !== pB) {
        pB = pB ? pB.next : headA
        pA = pA ? pA.next : headB
    }

    return pA
}


var headA = {
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


var headB = {
    val: 7,
    next: {
        val: 8,
        next: {
            val: 9,
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

console.log('getIntersectionNode1', getIntersectionNode1(headA, headB))
console.log('getIntersectionNode2', getIntersectionNode2(headA, headB))
console.log('getIntersectionNode3', getIntersectionNode3(headA, headB))