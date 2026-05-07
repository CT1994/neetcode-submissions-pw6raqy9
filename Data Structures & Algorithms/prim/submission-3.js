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
        const visited = new Uint8Array(n);
        let nodeVisited = 0;
        let total = 0;

        while (!paths.isEmpty() && nodeVisited < n) {
            const [w1, n1] = paths.dequeue();
            if (visited[n1]) {
                continue
            };

            visited[n1] = 1;
            nodeVisited++
            total += w1;
            
            for (const [w2, n2] of adjList[n1]) {
                if (!visited[n2]) {
                    paths.enqueue([w2, n2])
                }
            }
        }

        return nodeVisited === n ? total : -1
    }
}
