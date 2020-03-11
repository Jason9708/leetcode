/*

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 *    思路：
 *      从左右子树分别进行递归，即查找左右子树上是否有p节点或q节点
 *          - 左右子树均无 p节点或 q节点
 *          - 左子树找到，右子树没找到，返回左子树的查找结果
 *          - 右子树找到，左子树没找到，返回右子树的查找结果
 *          - 左右子均找到
 *              - 说明此时的p节点和q节点在根节点两侧，返回根节点
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root == null || root == p || root == q) {
        return root
    }

    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)

    if (left != null && right != null) {
        // pq节点在根节点两侧
        return root
    }

    return left != null ? left : right // p q 节点在同一侧得情况
}

var root = {
    val: 3,
    left: {
        val: 5,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 2,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 4,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 1,
        left: {
            val: 0,
            left: null,
            right: null
        },
        right: {
            val: 8,
            left: null,
            right: null
        }
    }
}

var p = {
    val: 7,
    left: null,
    right: null
}

var q = {
    val: 4,
    left: null,
    right: null
}

console.log('二叉树的最近公共祖先：', lowestCommonAncestor(root, p, q))