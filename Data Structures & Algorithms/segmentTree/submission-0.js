class Node {
    /**
     * @param {number} total
     * @param {number} l
     * @param {number} r
     */
    constructor(total, l, r) {
        this.sum = total;
        this.left = null;
        this.right = null;
        this.l = l;
        this.r = r;
    }
}

class SegmentTree {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.root = this.build(nums, 0, nums.length - 1);
    }

    /**
     * @param {number[]} nums
     * @param {number} l
     * @param {number} r
     * @return Node
     */
    build(nums, l, r) {
        if (l === r) {
            return new Node(nums[l], l, r);
        }

        const m = Math.floor((r + l) / 2);
        const root = new Node(0, l, r);
        root.left = this.build(nums, l, m);
        root.right = this.build(nums, m + 1, r);
        root.sum = root.left.sum + root.right.sum;
        return root;
    }

    /**
     * @param {number} index
     * @param {number} val
     */
    update(index, val) {
        this.updateHelper(this.root, index, val);
    }

    updateHelper(root, index, val) {
        if (root.l === root.r) {
            root.sum = val;
            return;
        }

        const m = Math.floor((root.l + root.r) / 2);
        if (index > m) {
            this.updateHelper(root.right, index, val);
        } else {
            this.updateHelper(root.left, index, val);
        }
        root.sum = root.left.sum + root.right.sum;
    }

    /**
     * @param {number} L
     * @param {number} R
     * @returns {number}
     */
    query(L, R) {
        return this.queryHelper(this.root, L, R);
    }

    queryHelper(root, l, r) {
        if (l <= root.l && root.r <= r) {
            return root.sum;
        }

        if (r < root.l || l > root.r) {
            return 0;
        }

        return this.queryHelper(root.left, l, r) + this.queryHelper(root.right, l, r);
    }
}
