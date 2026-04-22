class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0];
        let curSum = 0

        for (const n of nums) {
            curSum = Math.max(0, curSum) + n;
            maxSum = Math.max(maxSum, curSum)
        }

        return maxSum
    }
}
