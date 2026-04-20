/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) {
            return null
        }

        const graph = this.generateGraph(node, {});
        const nodes = {};

        for (const key in graph) {
            nodes[key] = new Node(key)
        }

        for (const key in graph) {
            graph[key].forEach((node) => {
                nodes[key].neighbors.push(nodes[node])
            })
        }

        return nodes[1];
    }

    generateGraph(node, graph) {
        if (graph[node.val]) {
            return graph
        }

        graph[node.val] = [];

        node.neighbors.forEach((neighbor) => {
            graph[node.val].push(neighbor.val);
            this.generateGraph(neighbor, graph)
        })

        return graph
    }
}
