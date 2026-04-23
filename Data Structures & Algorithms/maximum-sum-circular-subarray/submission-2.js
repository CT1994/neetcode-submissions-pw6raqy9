class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        const max = this.getMax(nums);
        const min = this.getMin(nums);
        const total = this.getTotal(nums);

        return max > 0 ? Math.max(max, total - min) : max;
    }

    getMax(nums) {
        let maxSum = nums[0]
        let curMax = 0;

        for (const n of nums) {
            curMax = Math.max(curMax + n, n);
            maxSum = Math.max(maxSum, curMax);
        }

        return maxSum
    }

    getMin(nums) {
        let minSum = nums[0];
        let curMin = 0;

        for (const n of nums) {
            curMin = Math.min(curMin + n, n);
            minSum = Math.min(minSum, curMin)
        }

        return minSum;
    }

    getTotal(nums) {
        return nums.reduce((acc, val) => acc += val, 0)
    }
}
