class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const n = points.length;
        const adjList = Array.from({ length: n }, () => []);

        for (let i = 0; i < n; i++) {
            const [x1, y1] = points[i];
            for (let j = i + 1; j < n; j++) {
                const [x2, y2] = points[j];
                const w = Math.abs(x1 - x2) + Math.abs(y1 - y2);
                adjList[i].push([j, w]);
                adjList[j].push([i, w]);
            }
        }

        const paths = new MinPriorityQueue((val) => val[1]);
        const visit = new Uint8Array(n);
        let visitCount = 0;
        let total = 0;

        paths.enqueue([0, 0]);

        while (!paths.isEmpty() && visitCount < n) {
            const [n1, w1] = paths.dequeue();

            if (visit[n1]) {
                continue;
            }

            visit[n1] = 1;
            visitCount++;
            total += w1;

            for (const [n2, w2] of adjList[n1]) {
                if (!visit[n2]) {
                    paths.enqueue([n2, w2]);
                }
            }
        }

        return total;
    }

    /**
     * @param {number} x1
     * @param {number} x2
     * @param {number} y1
     * @param {number} y2
     * @return {number}
     */
    manhattanDistance(x1, x2, y1, y2) {
        return x1 - x2 + (y1 + y2);
    }
}
