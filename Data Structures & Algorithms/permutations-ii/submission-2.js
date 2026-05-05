class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        nums.sort();
        let perms = [[]];

        for (const n of nums) {
            const nextPerms = [];
            for (const perm of perms) {
                for (let i = 0; i <= perm.length; i++) {
                    const pCopy = [...perm];
                    pCopy.splice(i, 0, n);
                    nextPerms.push(pCopy);

                    if (perm[i] === n) {
                        break;
                    }
                }
            }
            perms = nextPerms;
        }

        return perms;
    }
}
