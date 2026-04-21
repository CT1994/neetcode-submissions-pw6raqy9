class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const cache = [];

        const dfs = (i, j) => {
            if (i === text1.length || j === text2.length) {
                return 0
            }
            if (cache[i * text2.length + j]) {
                return cache[i * text2.length + j]
            }
            if (text1[i] === text2[j]) {
                return 1 + dfs(i + 1, j + 1);
            }

            return cache[i * text2.length + j] = Math.max(dfs(i + 1, j), dfs(i, j + 1))
        }

        return dfs(0, 0);
    }
}
