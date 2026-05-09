class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const adjList = Array.from({ length: numCourses }, () => []);
        const preMap = new Map();

        for (const [pre, crs] of prerequisites) {
            adjList[crs].push(pre);
        }

        const dfs = (crs) => {
            if (preMap.has(crs)) {
                return preMap.get(crs);
            }

            const preSet = new Set();
            for (const pre of adjList[crs]) {
                for (const p of dfs(pre)) {
                    preSet.add(p);
                }
            }

            preSet.add(crs)
            preMap.set(crs, preSet)
            return preSet;
        };

        for (let i = 0; i < numCourses; i++) {
            dfs(i);
        }

        return queries.map(([u, v]) => preMap.get(v).has(u));
    }
}
