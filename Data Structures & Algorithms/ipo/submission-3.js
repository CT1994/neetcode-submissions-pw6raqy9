class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        let res = w;
        const maxProfits = new MaxPriorityQueue((val) => val.profit);
        const minCapital = new MinPriorityQueue((val) => val.capital);

        for (let i = 0; i < profits.length; i++) {
            minCapital.enqueue({ capital: capital[i], profit: profits[i] });
        }

        for (let i = 0; i < k; i++) {
            while (!minCapital.isEmpty() && minCapital.front().capital <= res) {
                maxProfits.enqueue(minCapital.dequeue());
            }

            if (maxProfits.isEmpty()) {
                break;
            }

            res += maxProfits.dequeue().profit;
        }

        return res;
    }
}
