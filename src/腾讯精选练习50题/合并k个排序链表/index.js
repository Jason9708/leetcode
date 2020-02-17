/*
    合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

    示例:
    输入:
    [
      1->4->5,
      1->3->4,
      2->6
    ]
    输出: 1->1->2->3->4->4->5->6
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let mergeTwoLists = function(l1, l2) {
        if (l1 == null) {
            return l2
        }
        if (l2 == null) {
            return l1
        }
        if (l1.val <= l2.val) {
            l1.next = mergeTwoLists(l1.next, l2)
            return l1
        } else {
            l2.next = mergeTwoLists(l1, l2.next)
            return l2
        }
    }
    let n = lists.length
    if (n == 0) return null
    let res = lists[0]
    for (let i = 1; i < n; i++) {
        if (lists[i]) {
            res = mergeTwoLists(res, lists[i])
        }
    }
    return res
}


var lists = [{
        val: 1,
        next: {
            val: 2,
            next: {
                val: 4,
                next: null
            }
        }
    },
    {
        val: 1,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    },
    {
        val: 3,
        next: {
            val: 5,
            next: {
                val: 8,
                next: null
            }
        }
    }
]

console.log('result', mergeKLists(lists))