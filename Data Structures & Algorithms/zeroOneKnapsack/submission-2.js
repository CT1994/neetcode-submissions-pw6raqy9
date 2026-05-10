class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        // return this.dfs(profit, weight, capacity)
        // return this.memoization(profit, weight, capacity);
        // return this.dp(profit, weight, capacity);
        return this.dpOptimized(profit, weight, capacity)
    }

    dfs(profit, weight, capacity) {
        return this.dfsHelper(0, capacity, profit, weight);
    }

    dfsHelper(i, capacity, profit, weight) {
        if (i === profit.length) {
            return 0;
        }

        // do not include
        let maxProfit = this.dfsHelper(i + 1, capacity, profit, weight);

        // include if we have capacity
        const newCap = capacity - weight[i];
        if (newCap >= 0) {
            let newProfit = profit[i] + this.dfsHelper(i + 1, newCap, profit, weight);
            maxProfit = Math.max(maxProfit, newProfit);
        }

        return maxProfit;
    }

    memoization(profit, weight, capacity) {
        const rows = profit.length;
        const cols = capacity + 1;
        const cache = Array.from({ length: rows }, () => {
            return Array.from({ length: cols }, () => -1);
        });

        return this.memoHelper(0, capacity, profit, weight, cache);
    }

    memoHelper(i, capacity, profit, weight, cache) {
        if (i === profit.length) {
            return 0;
        }

        if (cache[i][capacity] > 0) {
            return cache[i][capacity];
        }

        let maxProfit = this.memoHelper(i + 1, capacity, profit, weight, cache);
        cache[i][capacity] = maxProfit;

        const newCap = capacity - weight[i];
        if (newCap >= 0) {
            let newProfit = profit[i] + this.memoHelper(i + 1, newCap, profit, weight, cache);
            maxProfit = Math.max(maxProfit, newProfit);
            cache[i][newCap] = maxProfit;
        }

        return maxProfit;
    }

    dp(profit, weight, capacity) {
        const rows = profit.length;
        const cols = capacity + 1;
        const cache = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));

        // fill the first row
        for (let c = 1; c < cols; c++) {
            if (weight[0] <= c) {
                cache[0][c] = profit[0];
            }
        }

        for (let r = 1; r < rows; r++) {
            for (let c = 1; c < cols; c++) {
                const skip = cache[r - 1][c]

                let include = 0
                if (c - weight[r] >= 0) {
                    include = profit[r] + cache[r - 1][c - weight[r]];
                }

                cache[r][c] = Math.max(skip, include)
            }
        }

        return cache[rows - 1][cols - 1];
    }

    dpOptimized(profit, weight, capacity) {
        const rows = profit.length;
        const cols = capacity + 1;
        let dp = new Array(cols).fill(0);

        for (let c = 0; c < cols; c++) {
            if (weight[0] <= c) {
                dp[c] = profit[0]
            }
        }

        for (let r = 1; r < rows; r++) {
            const curRow = new Array(cols).fill(0);
            for (let c = 1; c < cols; c++) {
                const skip = dp[c];
                let include = 0;
                if (c - weight[r] >= 0) {
                    include = profit[r] + dp[c - weight[r]]
                }
                curRow[c] = Math.max(include, skip)
            }
            dp = curRow
        }

        return dp[cols - 1]
    }
}
