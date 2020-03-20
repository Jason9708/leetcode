/*
给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

    例如:
    给定二叉树: [3,9,20,null,null,15,7],
         3
        / \
       9  20
          /  \
        15   7

    返回其层次遍历结果：
    [
        [3],
        [9,20],
        [15,7]
    ]
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []

    let res = [] // 最终遍历结果
    let queue = [root] // 用于存放节点的队列

    while (queue.length) {
        let arr = [],
            tmp = []
        while (queue.length) {
            let curr = queue.shift() // 队列 先进先出
            arr.push(curr.val)
            if (curr.left) tmp.push(curr.left)
            if (curr.right) tmp.push(curr.right)
        }
        queue = tmp
        res.push(arr)
    }
    return res
}