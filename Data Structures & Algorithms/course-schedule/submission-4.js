class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adjList = Array.from({ length: numCourses }, () => []);

        for (const [src, dest] of prerequisites) {
            adjList[src].push(dest);
        }

        const visiting = new Set();
        const visit = new Set();

        const dfs = (src) => {
            if (visiting.has(src)) {
                return false;
            }

            if (visit.has(src)) {
                return true;
            }

            visiting.add(src);

            for (const neighbor of adjList[src]) {
                if (!dfs(neighbor)) {
                    return false;
                }
            }

            visit.add(src);
            visiting.delete(src);

            return true;
        };

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) {
                return false
            }
        }

        return true
    }
}
