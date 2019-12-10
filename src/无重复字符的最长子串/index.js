/* 
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3 
*/



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let currentNum = 0,
        finallNum = 0;
    let m = ''; // 存放存在数组
    for (n of s) {
        if (m.indexOf(n) == -1) {
            m += n;
            currentNum++;
            finallNum = finallNum < currentNum ? currentNum : finallNum;
        } else {
            m += n;
            m = m.slice(m.indexOf(n) + 1); // 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。这里表示删去重复元素之前的元素 如 abb 删去 ab
            currentNum = m.length;
        }
    }
    return finallNum;
};

var s = 'abbacbd'
console.log(lengthOfLongestSubstring(s))