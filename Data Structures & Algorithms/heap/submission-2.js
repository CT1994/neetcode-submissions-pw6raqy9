class MinHeap {
    constructor() {
        this.heap = [0];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.heap.push(val);
        console.log(this.heap)
        let i = this.heap.length - 1;

        while (i > 1 && this.heap[i] < this.heap[Math.floor(i / 2)]) {
            const parent = Math.floor(i / 2);
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]]
            i = parent
        }
    }

    /**
     * @return {number}
     */
    pop() {
        // here we have no values in our heap
        if (this.heap.length === 1) {
            return -1;
        }

        // we have only 1 value
        if (this.heap.length === 2) {
            return this.heap.pop()
        }

        // get the root element to be returned
        let res = this.heap[1];

        // swap the root with last element
        this.heap[1] = this.heap.pop();

        // start from the top and bubble down
        let i = 1;

        // while we have children
        while (i * 2 < this.heap.length) {
            let child = i * 2;

            if (
                child + 1 < this.heap.length &&
                this.heap[child + 1] < this.heap[child]
            ) {
                child++
            }

            if (this.heap[i] <= this.heap[child]) {
                break;
            }

            [this.heap[i], this.heap[child]] = [this.heap[child], this.heap[i]];
            i = child;
        }

        return res
    }

    /**
     * @return {number}
     */
    top() {
        if (this.heap.length === 1) {
            return -1;
        }

        return this.heap[1];
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        nums.push(nums[0]);
        this.heap = nums;

        let cur = Math.floor((this.heap.length - 1) / 2);

        while (cur > 0) {
            let i = cur;
            while (i * 2 < this.heap.length) {
                let child = i * 2;

                if (
                    child + 1 < this.heap.length && 
                    this.heap[child + 1] < this.heap[child]
                ) {
                    child++
                }

                if (this.heap[i] <= this.heap[child]) {
                    break;
                }

                [this.heap[i], this.heap[child]] = [this.heap[child], this.heap[i]];
                i = child
            }
            cur--
        }

        console.log(this.heap)
    }
}
