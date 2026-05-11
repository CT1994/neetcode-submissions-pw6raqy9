class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        const dp = new Uint32Array(capacity + 1);

        for (let i = 0; i < profit.length; i++) {
            for (let c = weight[i]; c <= capacity; c++) {
                dp[c] = Math.max(dp[c], profit[i] + dp[c - weight[i]]);
            }
        }

        return dp[capacity];
    }
}
