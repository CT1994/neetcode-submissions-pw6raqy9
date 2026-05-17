class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Uint16Array(temperatures.length);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            while(stack.length > 0 && temperatures[i] > stack[stack.length - 1][1]) {
                const [idx] = stack.pop()
                res[idx] = i - idx
            }

            stack.push([i, temperatures[i]])
        }

        return res;
    }
}
