class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let result = r;

        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);

            let totalTime = 0;
            for (const pile of piles) {
                totalTime += Math.ceil(pile/m);
            }

            if (totalTime <= h) {
                r = m - 1;
                result = m;
            }
            else if (totalTime > h) {
                l = m + 1
            }
        }

        return result
    }
}

