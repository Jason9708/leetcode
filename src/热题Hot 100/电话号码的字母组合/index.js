/*
    给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

    给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。


    示例:
        输入："23"
        输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const Maps = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

    let result = []
    for (let i of digits) {
        let world = Maps[i]
        if (result.length > 0) {
            let tmp = []
            for (let j = 0; j < result.length; j++) {
                let wLen = world.length
                for (let k = 0; k < wLen; k++) {
                    tmp.push(result[j] + world[k])
                }
            }
            result = []
            result.push(...tmp)
        } else {
            result.push(...world)
        }
    }

    return result
}

console.log('电话号码的字母组合：', letterCombinations('23'))