class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let result = [];

        for (let i = 0; i <= n; i++) {
            result.push(this.countOnes(i))
        }

        return result
    }

    countOnes(n) {
        let count = 0;

        while (n > 0) {
            if (n & 1 == 1) {
                count++
            }

            n = n >> 1
        }

        return count
    }
}