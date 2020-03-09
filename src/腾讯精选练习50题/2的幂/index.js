/*
    给定一个整数，编写一个函数来判断它是否是 2 的幂次方。

    示例 1:
        输入: 1
        输出: true
        解释: 20 = 1
    ---------------------------------
    示例 2:
        输入: 16
        输出: true
        解释: 24 = 16
    ---------------------------------
    示例 3:
        输入: 218
        输出: false
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n == 1) return true

    let i = 2
    while (true) {
        if (i == n) {
            return true
        }
        if (i > n) {
            return false
        }

        i = i * 2
    }
}

var n = 16

console.log('2的幂：', isPowerOfTwo(n))