/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    quickSort(pairs) {
        this.quickSortHelper(pairs, 0, pairs.length - 1);
        return pairs
    }

    quickSortHelper(arr, s, e) {
        if (e - s + 1 <= 1) {
            return arr;
        }

        let j = s;

        for (let i = s; i < e; i++) {
            if (arr[i].key < arr[e].key) {
                const tmp = arr[j];
                arr[j] = arr[i];
                arr[i] = tmp;
                j++
            }
        }

        const tmp = arr[j];
        arr[j] = arr[e];
        arr[e] = tmp;

        this.quickSortHelper(arr, s, j - 1);
        this.quickSortHelper(arr, j + 1, e);
    }
}
