class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const combinations = [];
        const curCombination = [];

        const helper = (i) => {
            if (curCombination.length === k) {
                combinations.push([...curCombination]);
                return;
            }

            if (i > n) {
                return;
            }

            for (let j = i; j <= n; j++) {
                curCombination.push(j);
                helper(j + 1)
                curCombination.pop();
            }
        };

        helper(1)

        return combinations;
    }
}
