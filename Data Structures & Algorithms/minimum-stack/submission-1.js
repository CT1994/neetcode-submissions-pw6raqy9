class MinStack {
    constructor() {
        this.stack = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        const min = this.min[this.min.length - 1] ?? val;
        this.min.push(Math.min(val, min))
        console.log(this.min)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.min.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1]
    }
}
