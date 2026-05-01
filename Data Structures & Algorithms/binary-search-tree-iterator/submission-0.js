/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class BSTIterator {
    /**
     * @constructor
     * @param {TreeNode} root
     */
    constructor(root) {
        this.stack = [];
        this.cur = root;
    }

    /**
     * @return {number}
     */
    next() {
        let res = null;

        while (!res) {
            if (this.cur) {
                this.stack.push(this.cur);
                this.cur = this.cur.left;
            } else {
                this.cur = this.stack.pop();
                res = this.cur.val;
                this.cur = this.cur.right;
            }
        }

        return res;
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return !!this.cur || this.stack.length > 0;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
