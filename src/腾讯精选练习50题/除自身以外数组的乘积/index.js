/*
    给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，
    其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。


    示例:
        输入: [1,2,3,4]
        输出: [24,12,8,6]
 

    提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = [1]
    for (let i = 1; i < nums.length; i++) {
        res[i] = res[i - 1] * nums[i - 1]
    }
    let tmp = 1
    for (let i = nums.length - 1 - 1; i >= 0; i--) {
        tmp = tmp * nums[i + 1]
        res[i] *= tmp
    }
    return res
}

var nums = [1, 2, 3, 4]
console.log('除自身以外数组的乘积：', productExceptSelf(nums))