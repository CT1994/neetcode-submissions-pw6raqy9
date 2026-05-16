class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let res = "";
        const word = strs.pop()

        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            for (let j = 0; j < strs.length; j++) {
                if (char !== strs[j][i]) {
                    return res;
                }
            }

            res += char
        }

        return res;
    }
}
