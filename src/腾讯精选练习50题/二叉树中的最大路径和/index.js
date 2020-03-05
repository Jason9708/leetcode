/*
给定一个非空二叉树，返回其最大路径和。

本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。

示例 1:
    输入: [1,2,3]

           1
          / \
         2   3

    输出: 6
----------------------------------------
示例 2:
    输入: [-10,9,20,null,null,15,7]

       -10
       / \
      9  20
        /  \
       15   7

    输出: 42
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
 * @return {number}
 */

let maxPath // 记录最大路径和

var maxPathSum = function(root) {
    maxPath = -Infinity // maxPath 设为负无穷（最小）
    getMaxPathSum(root)
    return maxPath
}

function getMaxPathSum(currentNode) {
    if (!currentNode) return 0

    const leftChild = getMaxPathSum(currentNode.left)
    const rightChild = getMaxPathSum(currentNode.right)

    const currentSum = currentNode.val + Math.max(leftChild, 0) + Math.max(rightChild, 0) // 计算从该节点出发的最大路径
    maxPath = Math.max(maxPath, currentSum)

    return Math.max(leftChild, rightChild, 0) + currentNode.val // 返回最大路径和给父节点继续计算
}

var root = {
    val: 1,
    left: {
        val: -1,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 1,
        left: null,
        right: null
    }
}

console.log(maxPathSum(root))