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
        const res = {};
        const shortestPaths = new MinPriorityQueue((val) => val.w);
        const adjList = {};

        for (let i = 0; i < n; i++) {
            res[i] = -1;
            adjList[i] = [];
        }

        for (const [s, d, w] of edges) {
            adjList[s].push([d, w]);
        }

        res[src] = 0;

        shortestPaths.enqueue({ s: src, w: 0 });

        while (!shortestPaths.isEmpty()) {
            const currentPath = shortestPaths.dequeue();
            if (res[currentPath.s] === -1) {
                res[currentPath.s] = currentPath.w;
            }

            adjList[currentPath.s].forEach((path) => {
                if (res[path[0]] === -1) {
                    shortestPaths.enqueue({ s: path[0], w: currentPath.w + path[1] });
                }
            });
        }

        return res;
    }
}
