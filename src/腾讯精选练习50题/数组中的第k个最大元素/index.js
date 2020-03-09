/*
    在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

    示例 1:
        输入: [3,2,1,5,6,4] 和 k = 2
        输出: 5
    -------------------------------------------------------
    示例 2:
        输入: [3,2,3,1,2,4,5,5,6] 和 k = 4

    输出: 4
    说明:
        你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if (k < 1 || k > nums.length) return false
    nums.sort((a, b) => {
        return a - b
    })

    let max = nums[0]
    for (let i = 1; i <= nums.length - k; i++) {
        if (nums[i] > max) {
            max = nums[i]
        }
    }

    return max
}

var nums = [1, 2, 2, 3, 3, 5, 4, 4]

console.log('数组中的第k个最大元素', findKthLargest(nums, 2))