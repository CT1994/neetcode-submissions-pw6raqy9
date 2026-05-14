class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const n = s.length;
        const m = t.length;
        const cache = Array.from({length: n + 1}, () => Array(m + 1).fill(-1))

        const dfs = (i, j) => {
            // here we reached the end and the last characters match
            if (j === m && s[i] === t[j]) {
                return 1;
            }

            if (cache[i][j] > -1) {
                return cache[i][j];
            }

            let count = 0

            if (s[i] === t[j]) {
                count += dfs(i + 1, j + 1)
            }

            if (i < n) {
                count += dfs(i + 1, j)
            }

            cache[i][j] = count

            return count;
        };

        return dfs(0, 0);
    }
}
