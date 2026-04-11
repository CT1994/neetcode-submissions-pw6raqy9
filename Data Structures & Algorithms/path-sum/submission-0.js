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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        return this.leafPath(root, targetSum, 0)
    }

    leafPath(root, targetSum, sum) {
        if (root === null) {
            return false
        }

        sum += root.val;

        if (root.left === null && root.right === null) {
            return targetSum === sum;
        }

        if (this.leafPath(root.left, targetSum, sum)) {
            return true
        }

        if (this.leafPath(root.right, targetSum, sum)) {
            return true
        }
        
        sum -= root.val;

        return false;
    }
}
