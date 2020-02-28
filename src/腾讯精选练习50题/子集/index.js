/*
给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:
    输入: nums = [1,2,3]
    输出:
    [
      [3],
      [1],
      [2],
      [1,2,3],
      [1,3],
      [2,3],
      [1,2],
      []
    ]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 *      思路：
 *          递归
 */
var subsets = function(nums) {
    if (nums.length === 0) {
        return [
            []
        ]
    }
    let [num, ...restNums] = nums;
    let restSubSets = subsets(restNums)
    return restSubSets.map(set => [...set, num]).concat(restSubSets)
        // [[],[3]]
        // [[],[3],[2],[2,3]]
        // [[1],[1,3],[1,2],[1,2,3],[3],[2],[2,3],[]]
}

var nums = [1, 2, 3]
console.log(subsets(nums))