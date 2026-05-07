class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const n = points.length;
        const adjList = Array.from({ length: n }, () => []);

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    const w =
                        Math.abs(points[i][0] - points[j][0]) +
                        Math.abs(points[i][1] - points[j][1]);
                    adjList[i].push([j, w]);
                }
            }
        }

        const paths = new MinPriorityQueue((val) => val[1]);
        const visit = new Uint8Array(n);
        let visitCount = 0;
        let total = 0;

        console.log(adjList);
        paths.enqueue([0, 0]);

        while (!paths.isEmpty() && visitCount < n) {
            const [n1, w1] = paths.dequeue();
            console.log(n1, w1)

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
