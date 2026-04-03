class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        const L = nums1.slice(0, m);
        const R = nums2.slice(0, n);
        let i = 0;
        let j = 0;
        let k = 0;

        while (i < L.length && j < R.length) {
            if (L[i] <= R[j]) {
                nums1[k] = L[i]
                i++
            }
            else {
                nums1[k] = R[j];
                j++
            }
            k++
        }

        while (i < L.length) {
            nums1[k] = L[i];
            i++
            k++
        }

        while (j < R.length) {
            nums1[k] = R[j];
            j++
            k++
        }
    }
}
