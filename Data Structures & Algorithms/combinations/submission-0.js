class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const res = [];
        const combination = [];

        const helper = (i) => {
            if (combination.length === k) {
                res.push([...combination]);
                return;
            }

            if (i > n) {
                return;
            }

            combination.push(i);
            helper(i + 1)

            combination.pop()
            helper(i + 1)
        }

        helper(1)

        return res;
    }
}
