/*

    给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

    示例 1:
    输入:
    [
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [ 7, 8, 9 ]
    ]
    输出: [1,2,3,6,9,8,7,4,5]
    
    ----------------------------------

    示例 2:
    输入:
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9,10,11,12]
    ]
    输出: [1,2,3,4,8,12,11,10,9,5,6,7]

*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 *      思路：模拟走圈，走到边界时转向，直到走过路的长度足够，最终返回走过的路径
 *          - 先处理边界条件：设定四个方向走法： 右x++，下y++，左x--，上y--
 * 
 *          - 每个方向的界限值，走完一条变之后
 *              - 每次走完top：start_y + 1
 *              - 每次走完right：limit_x - 1
 *              - 每次走完bottom：limit_y - 1
 *              - 每次走完left：start_x + 1
 *          递归：
 *              - 终止条件： result.length === total
 *              - 遍历方向： ['top','right','bottom','left']
 *          循环：
 *              把循环每条边的过程，以及循环过后的状态值改变，分别放在四个函数中
 *        
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) return []
    if (matrix.length === 1) return matrix[0]

    var total = matrix.length * matrix[0].length // m * n 路径总长度
    var result = [], // 最终结果
        limit_x = matrix[0].length, // 横向长度
        limit_y = matrix.length, // 纵向长度
        start_x = 0,
        start_y = 0,
        direction = 'right' // 方向

    var changeDirection = {
        right: () => {
            direction = 'bottom'
            let temp = []
            for (let i = start_x; i < limit_x; i++) {
                temp.push(matrix[start_y][i])
            }
            result = result.concat(temp)
            start_y++
        },
        bottom: () => {
            direction = 'left'
            let temp = []
            for (let i = start_y; i < limit_y; i++) {
                temp.push(matrix[i][limit_x - 1])
            }
            result = result.concat(temp)
            limit_x--
        },
        left: () => {
            direction = 'top'
            let temp = []
            for (let i = start_x; i < limit_x; i++) {
                temp.unshift(matrix[limit_y - 1][i])
            }
            result = result.concat(temp)
            limit_y--
        },
        top: () => {
            direction = 'right'
            let temp = []
            for (let i = start_y; i < limit_y; i++) {
                temp.unshift(matrix[i][start_x])
            }
            result = result.concat(temp)
            start_x++
        }
    }
    var backtrack = () => {
        if (result.length === total) {
            return
        } else {
            changeDirection[direction]()
            backtrack()
        }
    }

    backtrack()
    return result
}

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(spiralOrder(matrix))