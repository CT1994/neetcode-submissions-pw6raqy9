class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const cache = Array.from({ length: text1.length }, () => new Array(text2.length).fill(-1));
        return this.dfs(text1, text2, 0, 0, cache);
    }

    dfs(s1, s2, i1, i2, cache) {
        if (i1 === s1.length || i2 === s2.length) {
            return 0;
        }

        if (cache[i1][i2] > -1) {
            return cache[i1][i2]
        }

        if (s1[i1] === s2[i2]) {
            cache[i1][i2] = 1 + this.dfs(s1, s2, i1 + 1, i2 + 1, cache);
        }
        else {
            cache[i1][i2] = Math.max(this.dfs(s1, s2, i1 + 1, i2, cache), this.dfs(s1, s2, i1, i2 + 1, cache))
        }

        return cache[i1][i2];
    }
}
