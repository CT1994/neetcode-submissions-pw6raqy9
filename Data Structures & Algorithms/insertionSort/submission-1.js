/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        // we create an empty array to store our result
        const res = [];

        // we loop over the items within the array
        for (let i = 0; i < pairs.length; i++) {
            // we create a index j from i - 1 (previous val) before i
            let j = i - 1;

            // we check if j is larger or eq to 0 to ensure it does not go out of bounds
            // we check if the previous value is larger than the next val
            while (j >= 0 && pairs[j].key > pairs[j + 1].key) {
                // we create a reference to pairs[j] value
                const tmp = pairs[j];
                // we update pairs[j] to pairs[j + 1]
                pairs[j] = pairs[j + 1];
                // we update pairs[j + 1] to tmp
                pairs[j + 1] = tmp;
                // we reduce j by 1
                j--
            }

            // we push a clone of our result into the res array
            res.push([...pairs])
        }

        return res
    }
}
