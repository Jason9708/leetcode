/*
    给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

    示例:
        输入: [-2,1,-3,4,-1,2,1,-5,4],
        输出: 6
        解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums.length) return

    // currentSum - 假设最大值  maxSum - 当前最大值  均从数组第一位开始算起
    let currentSum = nums[0]
    let maxSum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum += nums[i]) // 判断 <当前值> 与 <假设最大值+当前值> 的大小 若当前值更大，说明之前假设的最大值是负的，直接将当前值赋给假设最大值
        maxSum = Math.max(currentSum, maxSum) // 判断 假设最大值 与 当前最大值 的大小，大的取代当前最大值
    }

    return maxSum
}

var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))