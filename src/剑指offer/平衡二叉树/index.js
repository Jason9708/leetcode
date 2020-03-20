/*
输入一棵二叉树的根节点，判断该树是不是平衡二叉树。
如果某二叉树中任意节点的左右子树的深度相差不超过1，
那么它就是一棵平衡二叉树。

 

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

        3
       / \
      9  20
        /  \
       15   7
    返回 true 。

示例 2:
    给定二叉树 [1,2,2,3,3,null,null,4,4]

         1
        / \
       2   2
          / \
         3   3
        / \
       4   4
    返回 false 。
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let balanced = true

    let backTrack = function(root) {
        if (!root) return 0

        let leftDepth = backTrack(root.left)
        let rightDepth = backTrack(root.right)

        if (Math.abs(leftDepth - rightDepth) > 1) {
            balanced = false
        }

        return Math.max(leftDepth, rightDepth) + 1
    }

    backTrack(root)
    return balanced
}

var root = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 2,
        left: {
            val: 3,
            left: {
                val: 4,
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
            val: 2,
            left: null,
            right: null
        }
    }
}

console.log('平衡二叉树：', isBalanced(root))