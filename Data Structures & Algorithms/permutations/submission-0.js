class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let perms = [[]];

        for (const n of nums) {
            const nextPerms = [];
            for (const perm of perms) {
                for (let i = 0; i <= perm.length; i++) {
                    const pCopy = [...perm];
                    pCopy.splice(i, 0, n);
                    nextPerms.push(pCopy)
                }
            }
            perms = nextPerms
        }

        return perms
    }
}
