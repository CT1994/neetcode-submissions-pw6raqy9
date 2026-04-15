class MinHeap {
    constructor() {
        this.heap = [0]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.heap.push(val);
        let child = this.heap.length - 1;
        let parent = Math.floor(child / 2);

        while (child > 1 && this.heap[child] < this.heap[parent]) {
            [this.heap[child], this.heap[parent]] = [this.heap[parent], this.heap[child]]
            child = parent;
            parent = Math.floor(child / 2);
        }
    }

    /**
     * @return {number}
     */
    pop() {
        // empty list
        if (this.heap.length === 1) {
            return -1;
        }

        // 1 value
        if (this.heap.length === 2) {
            return this.heap.pop();
        }

        // first value
        const res = this.heap[1];
        // replace first value with last value
        this.heap[1] = this.heap.pop();
        // starting at the first value percolate down
        let i = 1;

        // break when we exceed the heap size
        while (i * 2 < this.heap.length) {
            // start from the left child
            let child = i * 2;
            
            // check if we have a left child
            if (child + 1 < this.heap.length && this.heap[child + 1] < this.heap[child]) {
                child++
            }

            if (this.heap[i] <= this.heap[child]) {
                break;
            }

            [this.heap[i], this.heap[child]] = [this.heap[child], this.heap[i]];
            i = child
        }

        return res;
    }

    /**
     * @return {number}
     */
    top() {
        return this.heap[1] ?? -1
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        this.heap = [0, ...nums];

        let cur = Math.floor((this.heap.length - 1) / 2);

        while (cur > 0) {
            let i = cur;
            while (i * 2 < this.heap.length) {
                let child = i * 2;
                
                if (child + 1 < this.heap.length && this.heap[child + 1] < this.heap[child]) {
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
    }
}
