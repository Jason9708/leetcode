/*
    给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

    示例:

        输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
        输出:
        [
            ["ate","eat","tea"],
            ["nat","tan"],
            ["bat"]
        ]
    说明：
        所有输入均为小写字母。
        不考虑答案输出的顺序。
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {}

    for (const str of strs) {
        const sortStr = str.split('').sort().join('')

        if (map[sortStr]) {
            map[sortStr].push(str)
        } else {
            map[sortStr] = []
            map[sortStr].push(str)
        }
    }

    return Object.keys(map).map(key => map[key])
}

var str = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log('字母异位词分组：', groupAnagrams(str))