/*
    给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

    例如
    给定数组 nums = [-1，2，1，-4], 和 target = 1
    与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2)
 */




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 *      思路：
 *          - 确定第一个数，在第二三个数移动过程中，更新与target差值最小的结果
 *          - 升序排序数组
 *          - 循环确定当前第一个数，第二个数从 i+1 开始，第三个数从第 nums.length-1 开始
 *          - 如果sum大于target，第三个数向前移动一位
 *          - 如果sum小于target，第二个数向后移动一位
 *          - 如果sum等于target，说明没有差值，直接返回结果
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b) // 升序排序
    let result = nums[0] + nums[1] + nums[2]

    for (let i = 0; i < nums.length; i++) {
        let secondIndex = i + 1
        let thirdIndex = nums.length - 1

        while (secondIndex < thirdIndex) {
            let sum = nums[i] + nums[secondIndex] + nums[thirdIndex]
            console.log(sum)
            if (Math.abs(result - target) > Math.abs(sum - target)) { // 判断新差值与当前最小差值的大小
                result = sum
            } else if (sum > target) { // sum大于target，第三个数向前移动一位
                thirdIndex--
            } else if (sum < target) { // sum小于target，第二个数向后移动一位
                secondIndex++
            } else {
                return result
            }
        }
    }
    return result
}


var nums = [-1, 2, 1, -4]

console.log(threeSumClosest(nums, 1))