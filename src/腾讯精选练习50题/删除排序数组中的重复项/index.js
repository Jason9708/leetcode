/*

    给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
    不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

    示例 1:
    给定数组 nums = [1,1,2], 
    函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
    你不需要考虑数组中超出新长度后面的元素。

    -----------------------------------------------------------

    示例 2:
    给定 nums = [0,0,1,1,1,2,2,3,3,4],
    函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
    你不需要考虑数组中超出新长度后面的元素。

*/
/**
 * @param {number[]} nums
 * @return {number}
 */

/*
    不通过计算重复个数 通过追踪重复元素的指针位置 并动态更新 => 增加一个 是重复元素且是第一次出现的位置指针 r 默认初始化为 0 ，
    数组遍历从 i = 1 开始
    当且仅当遇到下一个不相同即不重复的元素时，更新指针位置为下一个元素(虽然是重复元素但是还是要保留第一个不能被替换) && nums[r] = nums[i]
    否则指针位置不动，原数组继续遍历
    数组遍历完后 返回 r+1 (为什么加1？因为是索引位置，而题目要求返回的是长度)
*/

var removeDuplicates = function(nums) {
    var j = 0
    var n = nums.length
    for (let i = 1; i < n; i++) {
        if (nums[i] != nums[i - 1]) {
            j++
            nums[j] = nums[i]
        }
    }
    return j + 1
}