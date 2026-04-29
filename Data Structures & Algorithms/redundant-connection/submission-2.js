class UnionFind {
    constructor(n) {
        this.par = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
    }

    find(i) {
        if (this.par[i] === i) {
            return i;
        }

        this.par[i] = this.find(this.par[i]);

        return this.par[i];
    }

    union(x, y) {
        let p1 = this.find(x);
        let p2 = this.find(y);

        if (p1 === p2) return false;

        if (this.rank[p1] > this.rank[p2]) {
            this.par[p2] = p1;
        } else if (this.rank[p1] < this.rank[p2]) {
            this.par[p1] = p2;
        } else {
            this.par[p2] = p1;
            this.rank[p1] += 1;
        }
        return true;
    }
}

class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const unionFind = new UnionFind(edges.length + 1);

        for (const edge of edges) {
            if (!unionFind.union(edge[0], edge[1])) {
                return edge;
            }
        }
    }
}
