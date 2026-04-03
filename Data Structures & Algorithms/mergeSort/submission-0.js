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
    mergeSort(pairs) {
        return this.mergeSortHelper(pairs, 0, pairs.length - 1);
    }

    mergeSortHelper(pairs, s, e) {
        if (e - s + 1 <= 1) {
            return pairs
        }

        const m = Math.floor((s + e) / 2);
        this.mergeSortHelper(pairs, s, m);
        this.mergeSortHelper(pairs, m + 1, e);
        this.merge(pairs, s, m, e);

        return pairs;
    }

    merge(arr, s, m, e) {
        const L = arr.slice(s, m + 1);
        const R = arr.slice(m + 1, e + 1);

        let i = 0;
        let j = 0;
        let k = s;

        while (i < L.length && j < R.length) {
            if (L[i].key <= R[j].key) {
                arr[k] = L[i];
                i++
            }
            else {
                arr[k] = R[j]
                j++
            }
            k++
        }

        while (i < L.length) {
            arr[k] = L[i];
            i++;
            k++
        }

        while (j < R.length) {
            arr[k] = R[j];
            j++;
            k++
        }
    }
}
