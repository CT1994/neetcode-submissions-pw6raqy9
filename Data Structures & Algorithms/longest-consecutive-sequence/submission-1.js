class UnionFind {
    constructor() {
        this.par = new Map();
        this.rank = new Map();
    }

    add(x) {
        this.par.set(x, x);
        this.rank.set(x, 1);
    }

    find(x) {
        let p = this.par.get(x);

        while (p !== this.par.get(p)) {
            this.par.set(p, this.par.get(this.par.get(p)));
            p = this.par.get(p);
        }

        return p;
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX !== rootY) {
            this.par.set(rootY, rootX);
            const newSize = this.rank.get(rootX) + this.rank.get(rootY);
            this.rank.set(rootX, newSize);
            return newSize;
        }
        return this.rank.get(rootX);
    }

    largestRank() {
        let largest = 1;
        for (const val of this.rank.values()) {
            if (val > largest) {
                largest = val;
            }
        }

        return largest;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0
        }
        
        let largestNum = 0;
        const uf = new UnionFind();

        for (const n of nums) {
            uf.add(n);
            if (n > largestNum) {
                largestNum = n;
            }
        }

        const numSet = new Set(nums);
        for (const n of numSet) {
            if (numSet.has(n + 1)) {
                uf.union(n, n + 1);
            }
        }

        return uf.largestRank();
    }
}
