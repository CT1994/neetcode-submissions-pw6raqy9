class Solution {
    /**
     * @param {string[]} strs
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    findMaxForm(strs, m, n) {
        const count = Array.from({ length: strs.length }, () => ({ 0: 0, 1: 0 }));

        for (let i = 0; i < strs.length; i++) {
            for (const char of strs[i]) {
                count[i][char] += 1;
            }
        }

        const memo = {};
        const dfs = (i, m, n) => {
            const key = `${i},${m},${n}`;
            if (key in memo) return memo[key];
            if (i === strs.length) return 0;

            let maxCount = 0;
            // skip
            const skip = dfs(i + 1, m, n);

            // include if we can take the string
            let include = 0;
            if (m - count[i]["0"] > -1 && n - count[i]["1"] > -1) {
                include = 1 + dfs(i + 1, m - count[i]["0"], n - count[i]["1"]);
            }

            maxCount = Math.max(skip, include);
            memo[key] = maxCount;
            return maxCount;
        };

        return dfs(0, m, n);
    }
}
