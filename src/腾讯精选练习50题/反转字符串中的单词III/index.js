/*
    给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

    示例 1:
        输入: "Let's take LeetCode contest"
        输出: "s'teL ekat edoCteeL tsetnoc" 
        注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var sArry = s.split(" ")
    for (let i = 0; i < sArry.length; i++) {
        var reverseStr = sArry[i].split("").reverse().join("")
        sArry[i] = reverseStr
    }
    return sArry.join(' ')
}

/*
var reverseWords = function(s) {
    let arr = s.split("").reverse().join("")
    return arr.split(" ").reverse().join(" ")
}
*/

var s = "Let's take LeetCode contest"
console.log('反转字符串中的单词：', reverseWords(s))