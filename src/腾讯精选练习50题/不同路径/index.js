/*
    一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）
    机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）
    问总共有多少条不同的路径

    例如，上图是一个7 x 3 的网格。有多少可能的路径？

    说明：m 和 n 的值均不超过 100。

    示例 1:
    输入: m = 3, n = 2
    输出: 3
    解释:
    从左上角开始，总共有 3 条路径可以到达右下角。
    1. 向右 -> 向右 -> 向下
    2. 向右 -> 向下 -> 向右
    3. 向下 -> 向右 -> 向右
    ---------------------------------
    示例 2:
    输入: m = 7, n = 3
    输出: 28
*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 
 *  思路：动态规划
 *      左上角到右下角的走法 = 从右边开始走的路径总数+从下边开始走的路径总数
 *      所以可推出动态方程为
 *        - dp[i][j] = dp[i-1][j]+dp[i][j-1]
 *        - 初始化第一行和第一列的值
 *            - dp[0][j] = 1，dp[i][0] = 1
 *            - 因为一直向下或者一直向右走而不转向的话只有一种走法
 */
var uniquePaths = function(m, n) {
    var cur = new Array(n).fill(1)
    console.log(cur)
    for (var i = 1; i < m; i++) {
        for (var r = 1; r < n; r++) {
            cur[r] = cur[r - 1] + cur[r]
            console.log(cur[r])
        }
    }
    return cur[n - 1]
}

console.log(uniquePaths(2, 2))