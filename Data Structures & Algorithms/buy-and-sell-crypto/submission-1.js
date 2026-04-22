class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = l + 1;
        let maxP = 0

        while (l < prices.length) {
            if (prices[l] < prices[r]) {
                maxP = Math.max(maxP, prices[r] - prices[l])
            }
            else {
                l = r
            }
            r++
        }

        return maxP
    }
}
