class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        // TypedArrays are initialized to 0 by default.
        // Uint32Array is perfect for integer profits and weights.
        const dp = new Uint32Array(capacity + 1);

        for (let i = 0; i < profit.length; i++) {
            const currentWeight = weight[i];
            const currentProfit = profit[i];

            // For Unbounded Knapsack, we iterate forward from the weight of the item.
            // This allows us to "reuse" the same item multiple times for the same capacity.
            for (let c = currentWeight; c <= capacity; c++) {
                const include = currentProfit + dp[c - currentWeight];

                // Check if including the current item gives more profit than the previous best
                if (include > dp[c]) {
                    dp[c] = include;
                }
            }
        }

        return dp[capacity];
    }
}
