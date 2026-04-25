class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let res = 0;

        for (let i = 0; i < height.length; i++) {
            let maxLeft = 0;
            let maxRight = 0;

            // Scan to the left to find maxLeft
            for (let j = 0; j <= i; j++) {
                maxLeft = Math.max(maxLeft, height[j]);
            }

            // Scan to the right to find maxRight
            for (let j = i; j < height.length; j++) {
                maxRight = Math.max(maxRight, height[j]);
            }

            const val = Math.min(maxLeft, maxRight) - height[i]
            console.log(i, maxLeft, maxRight, val)

            res += val;
        }

        return res;
    }
}
