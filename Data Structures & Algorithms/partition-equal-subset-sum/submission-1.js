class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const totalSum = nums.reduce((a, b) => a + b, 0);
        const target = totalSum / 2;
        return this.dfs(0, 0, target, nums, new Map());
    }

    dfs(i, currentSum, target, nums, cache) {
        if (currentSum === target) return true;
        if (currentSum > target || i >= nums.length) return false;

        const key = `${i}-${currentSum}`;
        if (cache.has(`${i}-${currentSum}`)) {
            return cache.get(`${i}-${currentSum}`);
        }

        // skip
        const skip = this.dfs(i + 1, currentSum, target, nums, cache);

        if (skip) {
            cache.set(key, true);
            return true;
        }

        // include
        const include = this.dfs(i + 1, currentSum + nums[i], target, nums, cache);
        cache.set(key, include);

        return include;
    }
}
