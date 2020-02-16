/*
    给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

    有效字符串需满足：

    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    
    注意空字符串可被认为是有效字符串。

*/

/**
 * @param {string} s
 * @return {boolean}
 * 
 *   思路：
 *      将'()','{}','[]' 的子串替换成 ''
 *      与原字符串进行比较，如果与原字符串相同，说明没有一个符合替换条件，因此返回false
 */
var isValid = function(s) {
    while (s.length) {
        var temp = s
        s = s.replace('()', '')
        s = s.replace('[]', '')
        s = s.replace('{}', '')
        if (s == temp) return false
    }
    return true
}

var str = "()[]{}"

console.log(isValid(str))


/**
 *      另一种思路
 *          边遍历边匹配
 *          也就是遍历的时候遇到左括号存入数组，
 *          下次遇到的第一个右括号必须和数组中最后一个元素匹配，否则为无效字符串，
 *          匹配完成后从数组中删除此元素。若最终数组为空，表示括号已全部匹配完，字符串有效
 */

var isValid2 = function(s) {
    var map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    var leftArr = []
    for (var ch of s) {
        if (ch in map) leftArr.push(ch); //为左括号时，顺序保存
        else { //为右括号时，与数组末位匹配
            if (ch != map[leftArr.pop()]) return false;
        }
    }
    return !leftArr.length //防止全部为左括号
}

var str2 = "()[]{}"

console.log(isValid2(str2))