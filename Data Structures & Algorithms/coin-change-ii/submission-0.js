class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const cache = Array.from({length: coins.length}, () => new Array(amount).fill(-1));

        const dfs = (i, amount) => {
            if (i === coins.length || amount < 0) {
                return 0
            }

            if (amount === 0) {
                return 1;
            }

            if (cache[i][amount] > -1) {
                return cache[i][amount]
            }

            const skip = dfs(i + 1, amount);
            const newAmount = amount - coins[i];
            let include = 0;
            if (newAmount >= 0) {
                include = dfs(i, newAmount);
            }

            cache[i][amount] = skip + include;

            return cache[i][amount]
        }

        return dfs(0, amount)
    }
}
