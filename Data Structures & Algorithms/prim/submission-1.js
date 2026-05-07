/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {Array<Array<number>>} edges
     * @returns {number}
     */
    minimumSpanningTree(n, edges) {
        const adjList = Array.from({length: n}, () => []);

        for (const [src, dest, weight] of edges) {
            adjList[src].push([weight, dest])
            adjList[dest].push([weight, src])
        }

        const paths = new MinPriorityQueue((val) => val[0]);
        paths.enqueue([0, 0]);
        const visit = new Set()
        let total = 0;

        while (!paths.isEmpty()) {
            const [w1, n1] = paths.dequeue();
            if (visit.has(n1)) {
                continue
            };

            visit.add(n1)
            total += w1;

            if (visit.size === n) {
                return total;
            }
            
            for (const [w2, n2] of adjList[n1]) {
                if (!visit.has(n2)) {
                    paths.enqueue([w2, n2])
                }
            }
        }

        return -1
    }
}
