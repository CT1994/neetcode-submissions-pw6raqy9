class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number[]} succProb
     * @param {number} start_node
     * @param {number} end_node
     * @return {number}
     */
    maxProbability(n, edges, succProb, start_node, end_node) {
        const adjList = Array.from({length: n}, () => []);
        for (let i = 0; i < edges.length; i++) {
            const [src, dest] = edges[i];
            adjList[src].push([succProb[i], dest])
            adjList[dest].push([succProb[i], src])
        }
        
        const probs = {};
        const paths = new MaxPriorityQueue((val) => val[0])
        paths.enqueue([1, start_node]);

        while (!paths.isEmpty()) {
            const [p1, n1] = paths.dequeue();
            if (probs[n1] !== undefined) {
                continue;
            }

            if (n1 === end_node) {
                return p1
            }

            probs[n1] = p1;
            
            for (const [p2, n2] of adjList[n1]) {
                if (probs[n2] === undefined) {
                    paths.enqueue([p1 * p2, n2])
                }
            }
        }
        
        return 0
    }
}
