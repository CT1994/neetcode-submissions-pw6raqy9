class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const dp = new Array(amount + 1).fill(0);
        dp[0] = 1;

        for (const coin of coins) {
            for (let i = coin; i <= amount; i++) {
                if (dp[i - coin] >= 0) {
                    dp[i] += dp[i - coin];
                }
            }
        }

        return dp[amount];
    }
}
