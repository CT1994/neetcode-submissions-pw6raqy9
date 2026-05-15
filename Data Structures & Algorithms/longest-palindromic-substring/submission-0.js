class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let longest = [0, 0];

        for (let i = 0; i < s.length; i++) {
            let l = i;
            let r = i;
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                if (r - l > longest[1] - longest[0]) longest = [l, r];
                l -= 1;
                r += 1;
            }

            l = i;
            r = i + 1;
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                if (r - l > longest[1] - longest[0]) longest = [l, r];
                l -= 1;
                r += 1;
            }
        }

        return s.slice(longest[0], longest[1] + 1);
    }
}
