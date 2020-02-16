/* 
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。 
*/



/* 
思路
    回文串一定是对称的
        每次选择一个中心，进行中心向两边扩展比较左右字符是否相等
    中心点的选取有两种
        aba，中心点是b
        aa，中心点是两个a之间
    所以共有两种组合可能
        left：i，right：i
        left：i，right：i+1 
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length < 2) {
        return s;
    }
    let start = 0,
        end = 0;
    let n = s.length;
    // 中心扩展法
    let centerExpend = (left, right) => {
        // left right不越界的情况下，当下标left和right相等时 进入下一个循环
        while (left >= 0 && right < n && s[left] == s[right]) {
            left--;
            right++;
        }
        console.log('--', right - left - 1)
        return right - left - 1;
    }
    for (let i = 0; i < n; i++) {
        console.log('------------')
        let len1 = centerExpend(i, i);
        let len2 = centerExpend(i, i + 1);
        // 两种组合取最大回文串的长度
        let maxLen = Math.max(len1, len2);
        if (maxLen > end - start) {
            // 更新最大回文串的首尾字符索引
            start = i - ((maxLen - 1) >> 1);
            end = i + (maxLen >> 1);
        }
    }
    return s.substring(start, end + 1);
};

var s = 'abbabc'
console.log(longestPalindrome(s))