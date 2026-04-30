class Node {
    constructor(sum, l, r) {
        this.sum = sum;
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

    build(nums, l, r) {
        if (l === r) {
            return new Node(nums[l], l, r);
        }

        const m = Math.floor((l + r) / 2);
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

    updateHelper(node, index, val) {
        if (node.l === node.r) {
            node.sum = val;
            return;
        }

        const m = Math.floor((node.l + node.r) / 2);
        if (index <= m) {
            this.updateHelper(node.left, index, val);
        } else {
            this.updateHelper(node.right, index, val);
        }

        node.sum = node.left.sum + node.right.sum;
    }

    /**
     * @param {number} L
     * @param {number} R
     * @returns {number}
     */
    query(L, R) {
        return this.queryHelper(this.root, L, R)
    }

    queryHelper(node, l, r) {
        if (l <= node.l && node.r <= r) {
            return node.sum;
        }

        if (r < node.l || l > node.r) {
            return 0;
        }

        return this.queryHelper(node.left, l, r) + this.queryHelper(node.right, l, r);
    }
}
