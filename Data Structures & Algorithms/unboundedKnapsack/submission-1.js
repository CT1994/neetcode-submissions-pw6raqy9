class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        return this.dpOptimized(profit, weight, capacity);
    }

    bruteForce(profit, weight, capacity) {
        return this.bruteForceHelper(0, profit, weight, capacity);
    }

    bruteForceHelper(i, profit, weight, capacity) {
        if (i === profit.length) {
            return 0;
        }

        // skip
        let maxProfit = this.bruteForceHelper(i + 1, profit, weight, capacity);

        // include if we have capacity
        const newCapacity = capacity - weight[i];
        if (newCapacity >= 0) {
            const include = profit[i] + this.bruteForceHelper(i, profit, weight, newCapacity);
            maxProfit = Math.max(maxProfit, include);
        }

        return maxProfit;
    }

    memo(profit, weight, capacity) {
        const cache = Array.from({ length: profit.length }, () => new Array(capacity).fill(-1));
        return this.memoHelper(0, profit, weight, capacity, cache);
    }

    memoHelper(i, profit, weight, capacity, cache) {
        if (i === profit.length) {
            return 0;
        }

        if (cache[i][capacity] > -1) {
            return cache[i][capacity];
        }

        // skip
        let maxProfit = this.memoHelper(i + 1, profit, weight, capacity, cache);

        // include
        const newCapacity = capacity - weight[i];
        if (newCapacity >= 0) {
            const include = profit[i] + this.memoHelper(i, profit, weight, newCapacity, cache);
            maxProfit = Math.max(maxProfit, include);
        }

        cache[i][capacity] = maxProfit;
        return maxProfit;
    }

    dp(profit, weight, capacity) {
        const rows = profit.length + 1;
        const cols = capacity + 1;
        const dp = Array.from({ length: rows }, () => new Array(cols).fill(0));

        for (let c = 0; c < cols; c++) {
            if (weight[0] <= c) {
                dp[0][c] = profit[0];
            }
        }

        for (let r = 1; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                let maxProfit = dp[r - 1][c];
                if (c - weight[r] >= 0) {
                    maxProfit = Math.max(maxProfit, profit[r] + dp[r][c - weight[r]]);
                }
                dp[r][c] = maxProfit;
            }
        }

        return dp[rows - 1][cols - 1];
    }

    dpOptimized(profit, weight, capacity) {
        const dp = new Array(capacity + 1).fill(0);

        for (let i = 0; i < profit.length; i++) {
            for (let c = weight[i]; c <= capacity; c++) {
                dp[c] = Math.max(dp[c], profit[i] + dp[c - weight[i]]);
            }
        }

        return dp[capacity];
    }
}
