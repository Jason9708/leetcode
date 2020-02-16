/*
    给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
    注意：答案中不可以包含重复的三元组。

    示例：

    给定数组 nums = [-1, 0, 1, 2, -1, -4]，

    满足要求的三元组集合为：
    [
    [-1, 0, 1],
    [-1, -1, 2]
    ]
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 *  思路：
 *      1、先升序排序，sort 默认为快排
 *      2、我们需要确定三个数：
 *          - 第一个数：遍历数组，始终以当前遍历到的值作为第一个数，这个数是当次循环的最小值
 *          - 第二，三个数是基于第一个数建立的，指向i+1和length-1的值
 *          - 因为不能重复，所以不必反向去找比第一个数更小的数，因为它们已经是遍历过的
 *      3、基于步骤2，我们需要查找第二，第三个数
 *          - 一次遍历中，如果和小于0，说明需要更大的数字，则第二个数向后移动一位，如果大于0，则说明需要更小的数字，则第三个数向前移动一位
 *          - 当和为0的时候，存一次结果，并且同时把第二第三个数向中间靠拢一位（这里要注意如果移动之后的数字重复，既第二第三个数移动后重复，则需要再移动一次）
 *          - 当 第二个数下标 >= 第三个数下标时，则该次循环结束
 */
var threeSum = function(nums) {
    // 数组小于3时，没有三数之和，返回空数组
    if (nums.length < 3) {
        return []
    }
    nums.sort((a, b) => a - b) // 升序排序数组
    const result = []
    const len = nums.length
    let target, start, end // target作为当前第一个数（最小的值）

    for (let i = 0; i < len - 2; i++) {
        target = nums[i]

        // 处理第一个数的重复情况 如果第一个目标数与之前
        if (i > 0 && target === nums[i - 1]) {
            continue
        }

        start = i + 1
        end = len - 1
        while (start < end) {
            const secondValue = nums[start] // 第二个数
            const thirdValue = nums[end] // 第三个数
            const sum = target + secondValue + thirdValue
            if (sum === 0) {
                result.push([target, secondValue, thirdValue])
                while (nums[start] === nums[start + 1]) { // 处理第二个数重复情况
                    start += 1
                }
                while (nums[end] === nums[end - 1]) { // 处理第三个数重复情况
                    end -= 1
                }
                // 同时靠近
                start += 1
                end -= 1
            } else if (sum < 0) {
                // 和小于0 说明第二个数不够大，向后移一位
                start += 1
            } else {
                // 和大于0 说明第三个数太大，向前移一位
                end -= 1
            }
        }
    }

    return result
}

var nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]

console.log(threeSum(nums))