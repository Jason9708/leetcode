/*
给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

示例:
    输入: 3
    输出:
    [
        [ 1, 2, 3 ],
        [ 8, 9, 4 ],
        [ 7, 6, 5 ]
    ]
*/

/**
 * @param {number} n
 * @return {number[][]}
 *      思路：、
 *      创建一个 n x n 的二维数组 arr；
 *      创建一个 初始值为 1 的累加变量 k；
 *      数组 arr 的长度（行数）为 n，所以创建一个从 0 开始，循环次数为 n 的外层循环；
 *      按照当前螺旋循环的最外层的上边、右边、下边、左边的顺序把 k 的值赋值给数组 arr 的对应位置，并且每赋值一次，k 的值累加 1；
 *      最后返回得到的数组
 */
var generateMatrix = function(n) {
    // 创建 n x n 的二维数组
    let arr = new Array(n)
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(n)
    }

    let k = 1 // 累加变量
    for (let i = 0; i < n; i++) {
        // 上行 - 索引的列变，行不变，且列的变化顺序为从左到右
        for (let j = i; j < n - i; j++) {
            arr[i][j] = k++
        }
        // 右列 - 索引的行变，列不变，且行的变化顺序从上到下
        for (let j = i + 1; j < n - i; j++) {
            arr[j][n - 1 - i] = k++
        }
        // 下行 - 索引的列变，行不变，且列的变化顺序从右到左
        for (let j = n - 2 - i; j >= i; j--) {
            arr[n - 1 - i][j] = k++
        }
        // 左列 - 索引的列变，行不变，且行的变化顺序从下到上
        for (let j = n - 2 - i; j > i; j--) {
            arr[j][i] = k++
        }
    }

    return arr
}

var n = 3
console.log(generateMatrix(n))