class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefixSum = new Array(nums.length).fill(0);
        for (let i = 0; i < nums.length; i++) {
            const left = i > 0 ? this.prefixSum[i - 1] : 0;
            this.prefixSum[i] = nums[i] + left;
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        const prefixLeft = left > 0 ? this.prefixSum[left - 1] : 0;
        return this.prefixSum[right] - prefixLeft;
    }
}
