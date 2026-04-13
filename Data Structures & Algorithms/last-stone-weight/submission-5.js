class Solution {
    constructor() {
        this.heap = [0];
    }
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        this.heapify(stones)
        console.log(this.heap)

        while (this.heap.length > 2) {
            const stone1 = this.pop();
            const stone2 = this.pop();
            if (stone1 !== stone2) {
                this.push(Math.abs(stone1 - stone2))
            }
        }

        return this.heap[1] ? this.heap[1] : 0
    }

    push(val) {
        this.heap.push(val);
        let child = this.heap.length - 1;
        let parent = Math.floor(child / 2);

        while (child > 1 && this.heap[child] > this.heap[parent]) {
            [this.heap[child], this.heap[parent]] = [this.heap[parent], this.heap[child]]
            child = parent;
            parent = Math.floor(child / 2);
        }
    }

    heapify(values) {
        this.heap = [0, ...values];
        let cur = Math.floor((this.heap.length - 1) / 2);

        while (cur > 0) {
            let i = cur;

            while (i * 2 < this.heap.length) {
                let child = i * 2;

                if (
                    child + 1 < this.heap.length &&
                    this.heap[child + 1] > this.heap[child]
                ) {
                    child++
                }

                if (this.heap[i] > this.heap[child]) {
                    break;
                }

                [this.heap[i], this.heap[child]] = [this.heap[child], this.heap[i]]
                i = child
            }

            cur--
        }
    }

    pop() {
        if (this.heap.length === 1) {
            throw Error("empty heap can not pop")
        }

        if (this.heap.length === 2) {
            return this.heap.pop();
        }

        let res = this.heap[1];
        this.heap[1] = this.heap.pop();
        let i = 1;

        while (i * 2 < this.heap.length) {
            let child = i * 2;

            if (
                child + 1 < this.heap.length &&
                this.heap[child + 1] > this.heap[child]
            ) {
                child++
            }

            if (this.heap[i] > this.heap[child]) {
                break;
            }

            [this.heap[i], this.heap[child]] = [this.heap[child], this.heap[i]]
            i = child
        }

        return res;
    }
}
