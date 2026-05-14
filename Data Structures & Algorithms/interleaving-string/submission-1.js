class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if (s1.length + s2.length !== s3.length) {
            return false;
        }
        const rows = s1.length + 1;
        const cols = s2.length + 1;
        const cache = Array.from({ length: rows }, () => Array(cols).fill(null));
        return this.dfs(s1, s2, s3, 0, 0, cache);
    }

    dfs(s1, s2, s3, i, j, cache) {
        // reached the end return true
        if (i + j === s3.length) {
            return true;
        }

        if (cache[i][j] !== null) {
            return cache[i][j];
        }

        let result = false;
        if (i < s1.length && s1[i] === s3[i + j]) {
            result = this.dfs(s1, s2, s3, i + 1, j, cache);
        }

        if (j < s2.length && s2[j] === s3[i + j]) {
            result = this.dfs(s1, s2, s3, i, j + 1, cache);
        }

        cache[i][j] = result;

        return cache[i][j]
    }
}
