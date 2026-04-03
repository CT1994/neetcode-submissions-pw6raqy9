class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        const nums1Clone = [...nums1];
        let i = 0;
        let j = 0;
        let k = 0;

        while (i < m && j < n) {
            if (nums1Clone[i] <= nums2[j]) {
                nums1[k] = nums1Clone[i];
                i++;
            }
            else {
                const tmp = nums1[k];
                nums1[k] = nums2[j];
                j++
            }
            k++
        }

        while (i < m) {
            nums1[k] = nums1Clone[i];
            i++;
            k++;
        }

        while (j < n) {
            nums1[k] = nums2[j];
            j++;
            k++
        } 
    }
}
