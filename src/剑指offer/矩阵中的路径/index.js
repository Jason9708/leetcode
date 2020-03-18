/*
请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。
如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。
例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。

[["a","b","c","e"],
["s","f","c","s"],
["a","d","e","e"]]

    但矩阵中不包含字符串“abfb”的路径，]
    因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，
    路径不能再次进入这个格子。


示例 1：
    输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
    输出：true
示例 2：
    输入：board = [["a","b"],["c","d"]], word = "abcd"
    输出：false
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const xLen = board[0].length
    const yLen = board.length

    for (let i = 0; i < yLen; i++) {
        for (let j = 0; j < xLen; j++) {
            if (board[i][j] === word[0]) {
                if (isExist(board, j, i, word, {}) == true) {
                    return true
                }
            }
        }
    }
    return false
}

function isExist(board, x, y, word, hadExist) {
    if (!word.length) return true // 终止条件 ：word全部匹配完

    const key = `${y} - ${x}`

    // 判断条件：越界，访问过，当前word首字母与当前元素不同，返回false
    if (y >= board.length || x >= board[0].length || y < 0 || x < 0 || hadExist[key] || board[y][x] !== word[0]) {
        return false
    }

    hadExist[key] = true
    word = word.slice(1)

    // 向右查找
    if (isExist(board, x + 1, y, word, hadExist) === true) {
        return true
    }
    // 向左查找
    if (isExist(board, x - 1, y, word, hadExist) === true) {
        return true
    }
    // 向上查找
    if (isExist(board, x, y + 1, word, hadExist) === true) {
        return true
    }
    // 向下查找
    if (isExist(board, x, y - 1, word, hadExist) === true) {
        return true
    }

    hadExist[key] = false // 以上都不执行，说明没有找到，回缩
    return false
}