class UnionFind {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.par = new Array();
        this.rank = new Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            this.par[i] = i
        }
    }

    find(x) {
        let p = this.par[x]

        while (p !== this.par[p]) {
            this.par[p] = this.par[this.par[p]];
            p = this.par[p]
        }

        return p
    }

    union(x, y) {
        const p1 = this.find(x)
        const p2 = this.find(y)

        if (p1 === p2) {
            return false;
        }

        if (this.rank[p1] > this.rank[p2]) {
            this.par[p2] = p1
        }
        else if (this.rank[p1] < this.rank[p2]) {
            this.par[p1] = p2
        }
        else {
            this.par[p2] = p1;
            this.rank[p2] = this.rank[p2]++
        }

        return true
    }
}
class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const unionFind = new UnionFind(edges.length * 2);

        for (const edge of edges) {
            if (!unionFind.union(edge[0], edge[1])) {
                return edge
            }
        }
    }
}
