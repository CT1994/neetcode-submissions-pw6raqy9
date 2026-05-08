class UnionFind {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.par = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
        this.components = n;
    }

    find(x) {
        let p = this.par[x];

        while (p !== this.par[p]) {
            this.par[p] = this.par[this.par[p]];

            p = this.par[p];
        }

        return p;
    }

    union(x, y) {
        let p1 = this.find(x);
        let p2 = this.find(y);

        if (p1 === p2) {
            return false;
        }

        if (this.rank[p1] > this.rank[p2]) {
            this.par[p2] = p1;
        } else if (this.rank[p1] < this.rank[p2]) {
            this.par[p1] = p2;
        } else {
            this.par[p2] = p1;
            this.rank[p1] += 1;
        }
        this.components--;

        return true;
    }
}
class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const edges = [];

        for (let i = 0; i < points.length; i++) {
            const [x1, y1] = points[i];
            for (let j = i + 1; j < points.length; j++) {
                const [x2, y2] = points[j];
                const w = Math.abs(x1 - x2) + Math.abs(y1 - y2);
                edges.push([i, j, w]);
            }
        }

        const uf = new UnionFind(points.length);
        const minHeap = new PriorityQueue((a, b) => a[2] - b[2], edges);
        let mst = 0;

        while (uf.components > 1) {
            const [n1, n2, w] = minHeap.dequeue();
            if (uf.union(n1, n2)) {
                mst += w;
            }
        }

        return mst;
    }
}
