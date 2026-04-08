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
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root) {
        const arr = [];
        this.inOrderTraversalHelper(root, arr)
        return arr;
    }

    inOrderTraversalHelper(root, arr) {
        if (root === null) {
            return;
        }

        this.inOrderTraversalHelper(root.left, arr);
        arr.push(root.val)
        this.inOrderTraversalHelper(root.right, arr);
    }
}
