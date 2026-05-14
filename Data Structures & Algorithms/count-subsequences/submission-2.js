class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const m = s.length;
        const n = t.length;
        const dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0));

        for (let i = 0; i <= m; i++) {
            dp[i][0] = 1
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (s[i] === t[j]) {
                    dp[i + 1][j + 1] = dp[i][j] + dp[i][j + 1]
                }
                else {
                    dp[i + 1][j + 1] = dp[i][j + 1]
                }
            }
        }
        
        return dp[m][n]
    }
}
