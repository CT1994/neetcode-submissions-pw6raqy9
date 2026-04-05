class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let i = 0;
        let l = 0;
        let r = nums.length - 1;

        while (i <= r) {
            if (nums[i] === 0) {
                [nums[l], nums[i]] = [nums[i], nums[l]];
                l++;
            }
            else if (nums[i] === 2) {
                [nums[i], nums[r]] = [nums[r], nums[i]];
                r--;
                i--;
            }
            i++
        }
    }
}
