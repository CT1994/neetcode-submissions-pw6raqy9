class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length
        let profit = 0;

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                profit = Math.max(profit, prices[j] - prices[i])
            }
        }

        return profit
    }
}
