class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        this.heap = [0];
        
        for (const num of nums) {
            if (this.heap.length - 1 < k) {
                this.push(num)
            }
            else if (this.heap[1] <= num) {
                this.replaceRoot(num)
            }
        }

        console.log(this.heap)

        return this.heap[1]
    }

    push(val) {
        this.heap.push(val);
        let child = this.heap.length - 1;
        let parent = Math.floor(child / 2);

        while (child > 1 && this.heap[child] < this.heap[parent]) {
            [this.heap[child], this.heap[parent]] = [this.heap[parent], this.heap[child]];
            child = parent;
            parent = Math.floor(child / 2)
        }
    }

    replaceRoot(val) {
        this.heap[1] = val;
        let i = 1;
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
    }
}

// [3,2,3,1,2,4,5,5,6]
// [1,2,2,3,3,4,5,5,6]