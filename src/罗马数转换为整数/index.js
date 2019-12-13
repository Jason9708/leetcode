/*
给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内

罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
    字符          数值
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，
例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。
同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

·   I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
·   X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
·   C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

示例 3:
    输入: "IX"
    输出: 9

示例 4:
    输入: "LVIII"
    输出: 58
解释: L = 50, V= 5, III = 3.

示例 5:
    输入: "MCMXCIV"
    输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
*/

/*
    解法：将所有情况存到一个json中，然后遍历字符串，从json中取值
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var obj = {};
    obj = { 'I': 1, 'IV': 4, 'V': 5, 'IX': 9, 'X': 10, 'XL': 40, 'L': 50, 'XC': 90, 'C': 100, 'CD': 400, 'D': 500, 'CM': 900, 'M': 1000 };
    var result = 0;
    for (let i = 0; i < s.length; i++) {
        var name = s[i] + s[i + 1]
        var a = s[i];
        // 如果是2位的话需要再进行 i++，如果是1位不需要加2位
        if (obj[name] == undefined) {
            result += obj[a]
        } else {
            result += obj[name]
            i++
        }
    }
    return result
};

console.log(romanToInt('IV'))