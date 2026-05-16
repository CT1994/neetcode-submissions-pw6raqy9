class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let res = [];
        const word = strs.pop()

        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            let match = true
            for (let j = 0; j < strs.length; j++) {
                if (char !== strs[j][i]) {
                    match = false
                    break;
                }
            }

            if (!match) {
                break;
            }

            res.push(char)
        }

        return res.join("");
    }
}
