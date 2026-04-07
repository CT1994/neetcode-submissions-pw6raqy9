class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        const nums1Deduped = new Set([...nums1]);
        const result = new Set();

        for (let i = 0; i < nums2.length; i++) {
            if (nums1Deduped.has(nums2[i])) {
                result.add(nums2[i])
            }
        }

        return Array.from(result);
    }
}
