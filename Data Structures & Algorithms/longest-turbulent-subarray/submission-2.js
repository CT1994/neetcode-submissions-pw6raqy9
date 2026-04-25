class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let res = 1;
        let L = 0;
        let R = 1;
        let prev = ""

        while (R < arr.length) {
            if (arr[R - 1] < arr[R] && prev !== "<") {
                prev = "<";
                res = Math.max(res, R - L + 1)
                R++
            }
            else if (arr[R - 1] > arr[R] && prev !== ">") {
                prev = ">";
                res = Math.max(res, R - L + 1)
                R++
            }
            else {
                prev = ""
                R = arr[R] === arr[R - 1] ? R + 1 : R
                L = R - 1
            }
        }

        return res
    }
}
