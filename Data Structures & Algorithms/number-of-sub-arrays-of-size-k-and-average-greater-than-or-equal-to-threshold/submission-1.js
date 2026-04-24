class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        const window = [];
        const array = [];

        for (let R = 0; R < arr.length; R++) {
            if (window.length >= k) {
                window.shift();
            }

            window.push(arr[R]);

            if (window.length === k) {
                const total = window.reduce((acc, val) => acc += val, 0)
                const average = total / k;
                if (average >= threshold) {
                    array.push(average)
                }
            }
        }
        return array.length
    }
}
