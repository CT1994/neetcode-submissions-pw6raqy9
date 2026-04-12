class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        const result = [0];

        for (let i = 0; i < nums.length; i++) {
            let length = result.length;
            for (let j = 0; j < length; j++) {
                result.push(result[j] ^ nums[i])
            }
        }

        return result.reduce((acc, num) => acc += num, 0)
    }
}
