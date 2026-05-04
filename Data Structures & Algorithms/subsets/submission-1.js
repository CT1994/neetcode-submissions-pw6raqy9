class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const subsets = [];
        this.helper(0, nums, [], subsets)
        return subsets;
    }

    helper(i, nums, curset, subsets) {
        if (i === nums.length) {
            subsets.push([...curset]);
            return
        }

        curset.push(nums[i])
        this.helper(i + 1, nums, curset, subsets);
        curset.pop();

        this.helper(i + 1, nums, curset, subsets)
    }
}
