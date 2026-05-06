class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const shortest = new Array(n).fill(-1);
        const adjList = {};

        for (let i = 0; i <= n; i++) {
            adjList[i] = []
        }

        for (const [src, dest, weight] of times) {
            adjList[src - 1].push([dest - 1, weight])
        }

        const paths = new MinPriorityQueue((val) => val[0]);
        paths.enqueue([0, k - 1])

        while (!paths.isEmpty()) {
            const [w1, n1] = paths.dequeue();
            if (shortest[n1] !== -1) {
                continue;
            }
            shortest[n1] = w1;

            for (const [n2, w2] of adjList[n1]) {
                if (shortest[n2] === -1) {
                    paths.enqueue([w1 + w2, n2])
                }
            }
        }

        let total = -1;

        for (let i = 0; i < shortest.length; i++) {
            if (shortest[i] === -1) {
                return -1
            }
            else if (shortest[i] > total) {
                total = shortest[i]
            }
        }

        return total;
    }
}
