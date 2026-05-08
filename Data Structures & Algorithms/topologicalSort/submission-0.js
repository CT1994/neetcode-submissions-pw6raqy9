class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n, edges) {
        const adjList = Array.from({length: n}, () => [])

        for (const [src, dest] of edges) {
            adjList[src].push(dest)
        }

        const topSort = [];
        const visiting = new Set();
        const visited = new Set();

        const dfs = (src) => {
            if (visiting.has(src)) {
                return false
            }

            if (visited.has(src)) {
                return true
            }

            visiting.add(src)

            for (const neighbor of adjList[src]) {
                if (!dfs(neighbor)) {
                    return false
                }
            }

            visiting.delete(src);
            visited.add(src)
            topSort.push(src);

            return true;
        }

        for (let i = 0; i < n; i++) {
            if (!dfs(i)) {
                return []
            }
        }

        return topSort.reverse()
    }
}
