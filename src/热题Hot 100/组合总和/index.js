/*
    给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

    candidates 中的数字可以无限制重复被选取。

    说明：
        所有数字（包括 target）都是正整数。
        解集不能包含重复的组合。 

    示例 1:
        输入: candidates = [2,3,6,7], target = 7,
        所求解集为:
        [
            [7],
            [2,2,3]
        ]

    示例 2:
        输入: candidates = [2,3,5], target = 8,
        所求解集为:
        [
          [2,2,2,2],
          [2,3,3],
          [3,5]
        ]
*/


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 *      思路：递归回溯
 *      由题可知，原数组
 *         元素不重复
 *          寻找一个符合条件的组合
 *              且原数组的单个元素可以重复使用
 *               只要结果中的子组合互不相同即可
 *      求解
 *         且原数组的单个元素可以重复使用
 *              意味着下一个for循环中的元素选取，要从前一个元素开始，因为可以重复使用，不然如果跟着for的自增变量i走，会漏掉可能解
 *                  将自增变量i传递下去
 *       终止条件
 *           target 一一减去符合组合的元素，最终为 0 ，才是一个符合题意的组合
 */
var combinationSum = function(candidates, target) {
    let Len = candidates.length
    let result = []
    let tmpPath = []

    let backTrack = (tmpPath, target, start) => {
        if (target < 0) {
            return
        }

        if (target == 0) {
            result.push(tmpPath)
            return
        }

        for (let i = start; i < Len; i++) {
            tmpPath.push(candidates[i])
            backTrack(tmpPath.slice(), target - candidates[i], i)
            tmpPath.pop()
        }
    }

    backTrack(tmpPath, target, 0)
    return result
}


var candidates = [2, 3, 6, 7]
var target = 7
console.log('组合总和：', combinationSum(candidates, target))