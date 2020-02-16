/*
    编写一个函数来查找字符串数组中的最长公共前缀。

    如果不存在公共前缀，返回空字符串 ""。

    示例 1:
    输入: ["flower","flow","flight"]
    输出: "fl"

    ------------------------

    示例 2:
    输入: ["dog","racecar","car"]
    输出: ""
    解释: 输入不存在公共前缀。
    
    说明:
    所有输入只包含小写字母 a-z 。
*/

/**
 * @param {string[]} strs
 * @return {string}
 * 
 * 思路：
 *      由于公共前缀存在的话肯定是从字符串第一位开始
 *      那么可以用变量存放最长公共前缀
 *      循环判断这个数组每一个元素中是否含有当前这个最长公共前缀变量
 *      indexOf()结果不为0时，说明不存在。将该变量去除最后一个字符，再进行判断，直至indexOf()结果为0
 *      假如这个变量缩减为空时都不出现为0的，则返回 ''
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length == 0) {
        return ''
    }

    let commonPrefix = strs[0]
    for (let i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(commonPrefix) != 0) {
            commonPrefix = commonPrefix.substring(0, commonPrefix.length - 1)
            if (!commonPrefix) {
                return ''
            }
        }
    }
    return commonPrefix
}

var strs = ["flower", "flow", "flight"]

longestCommonPrefix(strs)