class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits === "") {
            return [];
        }

        const digitToChar = {
            2: ["a", "b", "c"],
            3: ["d", "e", "f"],
            4: ["g", "h", "i"],
            5: ["j", "k", "l"],
            6: ["m", "n", "o"],
            7: ["p", "q", "r", "s"],
            8: ["t", "u", "v"],
            9: ["w", "x", "y", "z"],
        };

        const combinations = [];
        const curCombination = [];

        const helper = (i) => {
            if (curCombination.length === digits.length) {
                combinations.push(curCombination.join(""));
                return;
            }

            const chars = digitToChar[digits[i]];
            for (const char of chars) {
                curCombination.push(char);
                helper(i + 1);
                curCombination.pop();
            }
        };

        helper(0);
        return combinations;
    }
}
