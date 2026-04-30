class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums);
        let max = 0;

        for (const num of numsSet) {
            let count = 1;
            let n = num;

            while (numsSet.has(n + 1)) {
                count++
                n++
            }

            if (count > max) {
                max = count;
            }
        }

        return max
    }
}
