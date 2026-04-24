class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Map();
        let L = 0;
        let res = 0;
        let maxF = 0;

        for (let R = 0; R < s.length; R++) {
            count.set(s[R], (count.get(s[R]) || 0) + 1);
            maxF = Math.max(maxF, count.get(s[R]));
            if (R - L + 1 - maxF > k) {
                count.set(s[L], (count.get(s[L]) - 1));
                L++;
            }

            res = Math.max(res, R - L + 1);
        }

        console.log(count);

        return res;
    }
}
