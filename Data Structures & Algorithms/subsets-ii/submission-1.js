class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const subsets = [];
        nums.sort()
        this.helper(0, nums, [], subsets);

        return subsets
    }

    helper(i, nums, curset, subsets) {
        if (i >= nums.length) {
            subsets.push([...curset])
            return
        }

        curset.push(nums[i]);
        this.helper(i + 1, nums, curset, subsets);
        curset.pop();

        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++
        }

        this.helper(i + 1, nums, curset, subsets)
    }
}
