class Solution {
    /**
     * @param {number[]} days
     * @param {number[]} costs
     * @return {number}
     */
    mincostTickets(days, costs) {
        const cache = Array.from({ length: days.length + 1 }).fill(-1);
        const dfs = (i) => {
            if (i === days.length) {
                return 0;
            }

            if (cache[i] > -1) {
                return cache[i];
            }

            const oneDay = costs[0] + dfs(i + 1);
            let j = i;
            while (j < days.length && days[j] < days[i] + 7) {
                j++;
            }
            const sevenDays = costs[1] + dfs(j)

            let k = i;
            while (k < days.length && days[k] < days[i] + 30) {
                k++;
            }
            const thirtyDay = costs[2] + dfs(k);

            cache[i] = Math.min(oneDay, sevenDays, thirtyDay);

            return cache[i];
        };

        return dfs(0);
    }
}
