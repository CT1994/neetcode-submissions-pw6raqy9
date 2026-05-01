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
    postorderTraversal(root) {
        const res = [];
        const stack = [root];
        const visits = [false];

        while (stack.length) {
            const cur = stack.pop();
            const visit = visits.pop();
            if (cur) {
                if (visit) {
                    res.push(cur.val)
                }
                else {
                    stack.push(cur);
                    visits.push(true);
                    stack.push(cur.right);
                    visits.push(false);
                    stack.push(cur.left);
                    visits.push(false)
                }
            }
        }

        return res
    }
}
