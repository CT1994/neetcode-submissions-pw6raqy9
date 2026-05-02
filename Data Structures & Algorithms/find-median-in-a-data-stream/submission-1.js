class MedianFinder {
    constructor() {
        this.small = new MaxPriorityQueue();
        this.large = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        console.log(num)
        this.small.enqueue(num);
        
        if (
            !this.small.isEmpty() &&
            !this.large.isEmpty() &&
            this.small.front() >
            this.large.front()
        ) {
            this.large.enqueue(this.small.dequeue())
        }
        

        if (this.small.size() - this.large.size() > 1) {
            this.large.enqueue(this.small.dequeue())
        }
        else if (this.large.size() - this.small.size() > 1) {
            this.small.enqueue(this.large.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.front()
        }
        if (this.small.size() < this.large.size()) {
            return this.large.front();
        }

        return (this.small.front() + this.large.front()) / 2
    }
}
