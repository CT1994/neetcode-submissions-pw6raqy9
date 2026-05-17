class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Uint16Array(temperatures.length);

        for (let i = 0; i < temperatures.length; i++) {
            for (let j = i + 1; j < temperatures.length; j++) {
                if (temperatures[i] < temperatures[j]) {
                    res[i] = j - i;
                    break
                }
            }
        }

        return res;
    }
}
