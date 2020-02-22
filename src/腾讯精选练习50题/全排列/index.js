/*
    给定一个没有重复数字的序列，返回其所有可能的全排列。

    示例:
    输入: [1,2,3]
    输出:
    [
        [1,2,3],
        [1,3,2],
        [2,1,3],
        [2,3,1],
        [3,1,2],
        [3,2,1]
    ]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 *     从数组第一个位置开始固定排列的第一位，看有多少种组合，确定后再将第二位固定为排列的第一位，依次查找
 */
var permute = function(nums) {
    let len = nums.length
    let result = []
    let tmpPath = []
    let backtrack = (tmpPath) => { // 回溯法
        if (tmpPath.length == len) {
            result.push(tmpPath)
            return
        }

        for (let i = 0; i < len; i++) {
            if (!tmpPath.includes(nums[i])) {
                tmpPath.push(nums[i])
                backtrack(tmpPath.slice())
                tmpPath.pop()
            }
        }
    }
    backtrack(tmpPath)
    return result
}


var nums = [1, 2, 3]
console.log(permute(nums))