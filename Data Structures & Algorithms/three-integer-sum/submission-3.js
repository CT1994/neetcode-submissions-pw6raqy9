class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let l = i + 1;
            let r = nums.length - 1;

            while (l < r) {
                if (nums[i] + nums[l] + nums[r] > 0) {
                    r--;
                } else if (nums[i] + nums[l] + nums[r] < 0) {
                    l++;
                } else {
                    res.push([nums[l], nums[i], nums[r]]);
                    while (nums[l] === nums[l + 1]) {
                        l++;
                    }
                    while (nums[r] === nums[r - 1]) {
                        r--;
                    }
                    l++
                    r--
                }
            }
        }

        return res;
    }
}
