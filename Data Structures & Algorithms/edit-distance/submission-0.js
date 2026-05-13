class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const cache = Array.from({ length: word1.length }, () => new Array(word2.length).fill(-1));
        return this.dfs(word1, word2, 0, 0, cache);
    }

    dfs(s1, s2, i1, i2, cache) {
        if (i1 === s1.length) return s2.length - i2;
        if (i2 === s2.length) return s1.length - i1;

        if (cache[i1][i2] > -1) {
            return cache[i1][i2];
        }

        if (s1[i1] === s2[i2]) {
            return this.dfs(s1, s2, i1 + 1, i2 + 1, cache);
        }

        const replaceChar = 1 + this.dfs(s1, s2, i1 + 1, i2 + 1, cache);
        const deleteChar = 1 + this.dfs(s1, s2, i1, i2 + 1, cache);
        const insertChar = 1 + this.dfs(s1, s2, i1 + 1, i2, cache);

        cache[i1][i2] = Math.min(deleteChar, insertChar, replaceChar);
        return cache[i1][i2];
    }
}
