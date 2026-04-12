class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

        const dfs = (i, cur, sum) => {
            if (sum === target) {
                result.push([cur])
                return;
            }

            if (i >= nums.length || sum > target) {
                return;
            }

            dfs(i, [...cur, nums[i]], sum + nums[i])
            dfs(i + 1, cur, sum)
        }

        dfs(0, [], 0)

        return result;
    }
}
