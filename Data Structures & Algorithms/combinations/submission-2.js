class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const combs = [];
        const curComb = [];

        const helper = (i) => {
            if (curComb.length === k) {
                combs.push([...curComb]);
                return;
            }

            if (i > n) {
                return;
            }

            curComb.push(i);
            helper(i + 1);
            curComb.pop(i);
            helper(i + 1)
        }

        helper(1);

        return combs
    }
}
