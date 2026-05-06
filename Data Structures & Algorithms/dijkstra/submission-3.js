/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        // 1. Initialize with -1 immediately
        const res = new Array(n).fill(-1);
        const adjList = Array.from({ length: n }, () => []);

        for (const [s, d, w] of edges) {
            adjList[s].push([d, w]);
        }

        const pq = new MinPriorityQueue((val) => val.weight);

        res[src] = 0;
        pq.enqueue({ node: src, weight: 0 });

        while (!pq.isEmpty()) {
            const { node, weight } = pq.dequeue();

            if (res[node] === -1) {
                res[node] = weight
            };

            for (const [neighbor, edgeWeight] of adjList[node]) {
                if (res[neighbor] === -1) {
                    pq.enqueue({ node: neighbor, weight: weight + edgeWeight });
                }
            }
        }

        return res;
    }
}
