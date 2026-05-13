class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const M = text1.length;
        const N = text2.length;
        let dp = new Array(N + 1).fill(0)

        for (let i = 0; i < M; i++) {
            const nextDp = new Array(N + 1).fill(0)
            for (let j = 0; j < N; j++) {
                if (text1[i] == text2[j]) {
                    // 1 + top left
                    nextDp[j + 1] = 1 + dp[j];
                } else {
                    // max value of top or left
                    nextDp[j + 1] = Math.max(nextDp[j], dp[j + 1]);
                }
            }
            dp = nextDp;
        }

        return dp[N];
    }
}
