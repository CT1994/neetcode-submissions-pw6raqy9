class Solution {
    /**
     * @param {string} str1
     * @param {string} str2
     * @return {string}
     */
    shortestCommonSupersequence(str1, str2) {
        const m = str1.length;
        const n = str2.length;

        const cache = Array.from({ length: m + 1 }, () => Array(n).fill(null));
        const dfs = (i, j) => {
            if (i === str1.length) {
                return str2.slice(j);
            }

            if (j === str2.length) {
                return str1.slice(i);
            }

            if (cache[i][j] !== null) {
                return cache[i][j];
            }

            let str = "";
            if (str1[i] === str2[j]) {
                str = str1[i] + dfs(i + 1, j + 1);
            } else {
                let newStr1 = i < m ? str1[i] + dfs(i + 1, j) : "";
                let newStr2 = j < n ? str2[j] + dfs(i, j + 1) : "";
                str = newStr1.length < newStr2.length ? newStr1 : newStr2
            }

            return (cache[i][j] = str);
        };

        return dfs(0, 0);
    }
}
