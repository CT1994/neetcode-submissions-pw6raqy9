class UnionFind {
    constructor() {
        this.par = new Map();
        this.size = new Map(); // renamed from rank for clarity (size tracking)
        this.maxSize = 0;
    }

    add(x) {
        // Fix 1: Only add if the element doesn't exist to avoid resetting state
        if (!this.par.has(x)) {
            this.par.set(x, x);
            this.size.set(x, 1);
            this.maxSize = Math.max(this.maxSize, 1);
        }
    }

    find(x) {
        if (this.par.get(x) === x) return x;
        
        // Fix 2: Standard path compression (recursive) for cleaner logic
        this.par.set(x, this.find(this.par.get(x)));
        return this.par.get(x);
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX !== rootY) {
            // Fix 3: Standard Union by Size
            const sizeX = this.size.get(rootX);
            const sizeY = this.size.get(rootY);

            if (sizeX < sizeY) {
                this.par.set(rootX, rootY);
                this.size.set(rootY, sizeX + sizeY);
                this.maxSize = Math.max(this.maxSize, sizeX + sizeY);
            } else {
                this.par.set(rootY, rootX);
                this.size.set(rootX, sizeX + sizeY);
                this.maxSize = Math.max(this.maxSize, sizeX + sizeY);
            }
        }
    }
}

class Solution {
    longestConsecutive(nums) {        
        const uf = new UnionFind();

        for (const n of nums) {
            uf.add(n);
        }

        for (const n of uf.par.keys()) {
            if (uf.par.has(n + 1)) {
                uf.union(n, n + 1);
            }
        }

        return uf.maxSize;
    }
}