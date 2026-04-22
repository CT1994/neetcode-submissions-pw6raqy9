class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = -Infinity;

        for (let i = 0; i < nums.length; i++) {
            let curSum = 0;
            for (let j = i; j < nums.length; j++) {
                curSum += nums[j]
                maxSum = Math.max(maxSum, curSum)
            }
        }

        return maxSum
    }
}
