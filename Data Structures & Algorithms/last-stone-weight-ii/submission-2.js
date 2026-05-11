class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeightII(stones) {
        const total = stones.reduce((a, b) => a += b, 0);
        const target = Math.floor(total / 2);
        const cache = new Map();

        const dfs = (i, curCount) => {
            if (curCount >= target || i === stones.length) {
                return Math.abs(curCount - (total - curCount));
            }

            const key = `${i}-${curCount}`;
            if (cache.has(key)) {
                return cache.get(key)
            }
            const min = Math.min(dfs(i + 1, curCount), dfs(i + 1, curCount + stones[i]));
            cache.set(key, min)
            return min
        }
        
        return dfs(0, 0)
    }
}
