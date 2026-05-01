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
    preorderTraversal(root) {
        const res = []
        const dfs = (node) => {
            const stack = [];
            let cur = node;

            while (cur || stack.length) {
                if (cur) {
                    res.push(cur.val);
                    if (cur.right) {
                        stack.push(cur.right)
                    }
                    cur = cur.left
                }
                else {
                    cur = stack.pop();
                }
            }
        }

        dfs(root)

        return res
    }
}
