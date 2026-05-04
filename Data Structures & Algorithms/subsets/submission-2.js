class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const totalSubsets = 1 << nums.length;
        const result = new Array(totalSubsets);

        result[0] = [];
        let currentSize = 1;

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            for (let j = 0; j < currentSize; j++) {
                const newSubset = result[j].slice();
                newSubset.push(num);
                result[currentSize + j] = newSubset;
            }

            currentSize *= 2;
        }

        return result;
    }
}
