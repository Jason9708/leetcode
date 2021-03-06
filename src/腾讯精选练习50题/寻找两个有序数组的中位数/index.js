/*
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]
则中位数是 2.0

--------------

示例 2:

nums1 = [1, 2]
nums2 = [3, 4]
则中位数是 (2 + 3)/2 = 2.5

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/*
    方案一
    时间复杂度：O((m + n)log(m + n))  执行用时：152 ms
 */
var findMedianSortedArrays1 = function(nums1, nums2) {
    const arr = [...nums1, ...nums2].sort((a, b) => a - b)
    const { length } = arr
    return length % 2 ? arr[Math.floor(length / 2)] : (arr[length / 2] + arr[length / 2 - 1]) / 2
}


/*
    方案二：二分查找法

 */
var findMedianSortedArrays2 = function(nums1, nums2) {
    if (nums1.length > nums2.length)[nums1, nums2] = [nums2, nums1]

    const length1 = nums1.length
    const length2 = nums2.length
    let min = 0
    let max = length1
    let half = Math.floor((length1 + length2 + 1) / 2)
    console.log(half)
    while (max >= min) {
        const i = Math.floor((max + min) / 2)
        const j = half - i
        if (i > min && nums1[i - 1] > nums2[j]) {
            max = i - 1
        } else if (i < max && nums1[i] < nums2[j - 1]) {
            min = i + 1;
        } else {
            let left, right;
            if (i === 0) left = nums2[j - 1];
            else if (j === 0) left = nums1[i - 1];
            else left = Math.max(nums1[i - 1], nums2[j - 1]);

            if (i === length1) right = nums2[j];
            else if (j === length2) right = nums1[i];
            else right = Math.min(nums1[i], nums2[j]);

            return (length1 + length2) % 2 ? left : (left + right) / 2;
        }
    }
    return 0
}