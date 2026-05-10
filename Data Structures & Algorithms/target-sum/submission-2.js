class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const dp = new Map()
        const dfs = (i, sum) => {
            const key = `${i}-${sum}`
            if (dp.has(key)) {
                return dp.get(key)
            }

            if (i === nums.length && sum === target) {
                return 1
            }

            if (i === nums.length) {
                return 0
            }

            let count = 0;

            dp.set(key, dfs(i + 1, sum + nums[i]) + dfs(i + 1, sum - nums[i]))

            return dp.get(key)
        }

        return dfs(0, 0);
    }
}
