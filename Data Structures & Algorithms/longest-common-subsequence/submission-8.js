class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const M = text1.length;
        const N = text2.length;
        const dp = Array.from({ length: M + 1 }, () => new Array(N + 1).fill(0));
        //     C R A B T
        //   0 0 0 0 0 0
        // C 0 1 1 1 1 1
        // A 0 1 1 2 2 2
        // T 0 1 1 2 2 3

        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                if (text1[i] == text2[j]) {
                    // 1 + top left
                    dp[i + 1][j + 1] = 1 + dp[i][j];
                } else {
                    // max value of top or left
                    dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
                }
            }
        }

        return dp[M][N];
    }
}
