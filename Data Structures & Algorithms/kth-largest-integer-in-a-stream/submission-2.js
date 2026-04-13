class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.nums = [0];

        for (let i = 0; i < nums.length; i++) {
            this.push(nums[i]);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.push(val);
        console.log(this.nums)
        return this.nums[1];
    }

    push(val) {
        this.nums.push(val);
        let i = this.nums.length - 1;

        while (i > 1 && this.nums[i] < this.nums[Math.floor(i / 2)]) {
            let tmp = this.nums[i];
            this.nums[i] = this.nums[Math.floor(i / 2)];
            this.nums[Math.floor(i / 2)] = tmp;
            i = Math.floor(i / 2);
        }

        while (this.nums.length - 1 > this.k) {
            this.pop();
        }
    }

    pop() {
        if (this.nums.length === 1) {
            return;
        }

        if (this.nums.length === 2) {
            this.nums.pop();
            return
        }

        this.nums[1] = this.nums.pop();
        let i = 1;

        while (i * 2 < this.nums.length) {
            if (i * 2 + 1 < this.nums.length &&
            this.nums[i * 2 + 1] < this.nums[i * 2] &&
            this.nums[i * 2 + 1] < this.nums[i]) {
                const tmp = this.nums[i];
                this.nums[i] = this.nums[i * 2 + 1];
                this.nums[i * 2 + 1] = tmp;
                i = i * 2 + 1
            }
            else if (this.nums[i * 2] < this.nums[i]) {
                const tmp = this.nums[i];
                this.nums[i] = this.nums[i * 2];
                this.nums[i * 2] = tmp;
                i = i * 2
            }
            else {
                break
            }
        }
    }
}
