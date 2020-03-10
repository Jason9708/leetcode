/*
    给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

    百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

    示例 1:
        输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
        输出: 6 
        解释: 节点 2 和节点 8 的最近公共祖先是 6。
    -----------------------------------------------------------------------
    示例 2:
        输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
        输出: 2
        解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身
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
 *      思路：
 *          - 二叉搜索树，左子节点小于父节点，右子节点大于父节点
 *          - 如果 p，q 分布在节点两侧，则该节点为最近公共祖先
 *          - 如果 p，q 分布在节点一侧，则继续搜索这一侧（递归）
 */
var lowestCommonAncestor = function(root, p, q) {
    var rootVal = root.val
    var pVal = p.val
    var qVal = q.val

    if (pVal > qVal) {
        [pVal, qVal] = [qVal, pVal]
    }

    if ((rootVal > pVal && rootVal < qVal) || (rootVal === pVal || rootVal === qVal)) {
        return root
    } else if (rootVal < pVal && rootVal < qVal) {
        return lowestCommonAncestor(root.right, p, q)
    } else if (rootVal > pVal && rootVal > qVal) {
        return lowestCommonAncestor(root.left, p, q)
    }
}

var root = {
    val: 6,
    left: {
        val: 2,
        left: {
            val: 0,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: {
                val: 3,
                left: null,
                right: null
            },
            right: {
                val: 5,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 8,
        left: {
            val: 7,
            left: null,
            right: null
        },
        right: {
            val: 9,
            left: null,
            right: null
        }
    }
}

var p = {
    val: 2,
    left: {
        val: 0,
        left: null,
        right: null
    },
    right: {
        val: 4,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    }
}

var q = {
    val: 8,
    left: {
        val: 7,
        left: null,
        right: null
    },
    right: {
        val: 9,
        left: null,
        right: null
    }
}

console.log('二叉搜索树的最近公共祖先：', lowestCommonAncestor(root, p, q))