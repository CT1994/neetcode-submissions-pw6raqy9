class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindromeSubseq(s) {
        const cache = Array.from({ length: s.length }, () => new Array(s.length).fill(-1));
        const dfs = (i, j) => {
            if (i > j) {
                return 0;
            }

            if (cache[i][j] > -1) {
                return cache[i][j];
            }

            if (i == j) {
                return 1;
            }

            if (s[i] === s[j]) {
                return (cache[i][j] = 2 + dfs(i + 1, j - 1));
            }

            return (cache[i][j] = Math.max(dfs(i + 1, j), dfs(i, j - 1)));
        };

        return dfs(0, s.length - 1);
    }
}
