class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const n = nums.length;
        let dp = Array.from({length: n + 1}, () => ({}));
        dp[0][0] = 1;

        for (let i = 0; i < n; i++) {
            for (let total in dp[i]) {
                total = Number(total)
                const count = dp[i][total]
                dp[i + 1][total + nums[i]] = (dp[i + 1][total + nums[i]] || 0) + count
                dp[i + 1][total - nums[i]] = (dp[i + 1][total - nums[i]] || 0) + count
            }
        }

        return dp[n][target] || 0
    }
}
