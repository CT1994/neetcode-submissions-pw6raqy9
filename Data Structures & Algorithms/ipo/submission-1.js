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
        const remainingCapital = [...capital];
        const remainingProfits = [...profits];
        const availableProfits = new MaxPriorityQueue();

        for (let i = 0; i < k; i++) {
            const remove = []
            for (let i = 0; i < remainingProfits.length; i++) {
                if (capital[i] <= res) {
                    availableProfits.enqueue(remainingProfits[i]);
                    remove.push(i);
                }
            }

            while (remove.length) {
                const val = remove.pop()
                remainingCapital.splice(val, 1)
                remainingProfits.splice(val, 1)
            }

            res += availableProfits.dequeue()
        }

        return res;
    }
}
