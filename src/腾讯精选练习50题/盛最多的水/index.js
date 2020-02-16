/*
    给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

    说明：你不能倾斜容器，且 n 的值至少为 2。

    垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

    示例:

    输入: [1,8,6,2,5,4,8,3,7]
    输出: 49

*/

/**
 * @param {number[]} height
 * @return {number}
 */
/*
    思路：
        从0位置到数组尾部，考虑移动后会出现的情况：
        1 - 宽度肯定变小
        2 - 高度变化不定，但如果移动后高度变小，那么面积肯定变小
        3 - 需要考虑是从左边界去移动还是右边界去移动，假设左边界低于右边界，应从左边界开始移动，否则从右边界进行移动

        还需要记录上一次移动的高度来比较移动后的高度是变小还是变大，变小则不需做考虑
 */
var maxArea = function(height) {
    // i-左边界   j-右边界   result-最大面积   lastHeight-上一次的高度
    let i = 0,
        j = height.length - 1,
        result = 0,
        lastHeight = 0

    while (i < j) {
        if (height[i] < height[j]) {
            // 右边界交高，以左边界计算
            if (height[i] > lastHeight) { // 只考虑移动后高度增加的情况 （移动后宽度肯定变小，所以如果高度也变小，那么面积肯定变小）
                result = Math.max(result, (j - i) * height[i]) // 将最大值赋值给result
                lastHeight = height[i]
            }
            i++
        } else {
            // 以右边界计算
            if (height[j] > lastHeight) { // 只考虑移动后高度增加的情况 （移动后宽度肯定变小，所以如果高度也变小，那么面积肯定变小）
                result = Math.max(result, (j - i) * height[j]) // 将最大值赋值给result
                lastHeight = height[j]
            }
            j--
        }
    }
    return result
}