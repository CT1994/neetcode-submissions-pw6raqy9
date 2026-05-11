class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const cache = Array.from({length: coins.length}, () => Array(amount).fill(-1))
        const res = this.bruteForce(0, coins, amount, cache);
        return res === Infinity ? -1 : res
    }

    bruteForce(i, coins, target, cache) {
        if (i === coins.length || target < 0) {
            return Infinity;
        }

        if (target === 0) {
            return 0;
        }

        if (cache[i][target] > -1) {
            return cache[i][target]
        }
        
        let minCoins = this.bruteForce(i + 1, coins, target, cache);
        const newTarget = target - coins[i];
        if (newTarget >= 0) {
            const include = 1 + Math.min(this.bruteForce(i, coins, newTarget, cache));
            minCoins = Math.min(minCoins, include)
        }

        cache[i][target] = minCoins

        return minCoins
    }
}
