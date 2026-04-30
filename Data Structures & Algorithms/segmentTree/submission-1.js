class SegmentTree {
    /**
     * @param {number[]} nums
     */
    constructor(data) {
        this.n = data.length;
        this.tree = new Array(2 * this.n).fill(0);

        for (let i = 0; i < this.n; i++) {
            this.tree[this.n + i] = data[i];
        }

        for (let i = this.n - 1; i > 0; --i) {
            this.tree[i] = this.tree[i << 1] + this.tree[(i << 1) | 1];
        }
    }

    update(p, value) {
        for (this.tree[(p += this.n)] = value; p > 1; p >>= 1) {
            this.tree[p >> 1] = this.tree[p] + this.tree[p ^ 1];
        }
    }

    query(l, r) {
        let res = 0;
        l += this.n;
        r += this.n;

        while (l <= r) {
            if ((l & 1) === 1) {
                res += this.tree[l];
                l++;
            }
            
            if ((r & 1) === 0) {
                res += this.tree[r];
                r--;
            }

            l >>= 1;
            r >>= 1;
        }
        return res;
    }
}
