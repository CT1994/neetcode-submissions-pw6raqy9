class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], i)
        }

        for (let i = 0; i < nums.length; i++) {
            const val = map.get(target - nums[i])
            if (val && val !== i) {
                return [i, map.get(target - nums[i])]
            }
        }

        return []
    }
}
