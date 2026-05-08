class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adjList = Array.from({ length: numCourses }, () => []);

        for (const [src, dest] of prerequisites) {
            adjList[src].push(dest);
        }

        const topSort = [];
        const visited = new Set();
        const visiting = new Set();

        const dfs = (src) => {
            if (visiting.has(src)) {
                return false;
            }

            if (visited.has(src)) {
                return true;
            }

            visiting.add(src);

            for (let neighbor of adjList[src]) {
                if (!dfs(neighbor)) {
                    return [];
                }
            }

            visiting.delete(src);
            visited.add(src);
            topSort.push(src);

            return true;
        };

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) {
                return [];
            }
        }

        return topSort;
    }
}
