/*
    给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

    示例：

        给定一个链表: 1->2->3->4->5, 和 n = 2.
        当删除了倒数第二个节点后，链表变为 1->2->3->5.、

    说明：
        给定的 n 保证是有效的。

    进阶：
        你能尝试使用一趟扫描实现吗？
*/
var removeNthFromEnd = function(head, n) {
    let first = head
    for (let i = 0; i < n; i++) {
        first = first.next
    }
    if (!first) return head.next // 当 n = 链表长度时，则只需删除第一个节点

    let second = head

    while (first.next) {
        first = first.next
        second = second.next
    }
    second.next = second.next.next // 删除当前second的下一个节点

    return head
}