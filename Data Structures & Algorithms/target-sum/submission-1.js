class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        let res = 0;

        const dfs = (i, sum) => {
            if (i === nums.length && sum === target) {
                res++
            }

            if (i === nums.length) {
                return
            }

            // add nums[i]
            dfs(i + 1, sum + nums[i])
            // delete num[i]
            dfs(i + 1, sum - nums[i]);
        }

        dfs(0, 0)

        return res;
    }
}
