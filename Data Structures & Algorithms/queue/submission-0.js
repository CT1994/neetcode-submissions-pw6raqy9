class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class MyDeque {
    constructor() {
        this.left = new ListNode(0);
        this.right = new ListNode(0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.left.next === this.right;
    }

    /**
     * @param {number} value
     */
    append(value) {
        const node = new ListNode(value);
        const prev = this.right.prev;
        const next = this.right;
        prev.next = node;
        next.prev = node;
        node.next = next;
        node.prev = prev;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const node = new ListNode(value);
        const prev = this.left;
        const next = this.left.next;
        prev.next = node;
        next.prev = node;
        node.next = next;
        node.prev = prev;
    }

    /**
     * @return {void}
     */
    pop() {
        const end = this.right.prev;
        if (end === this.left) {
            return -1;
        }

        const prev = end.prev;
        const next = end.next;
        prev.next = next;
        next.prev = prev;
        
        return end.val;
    }

    /**
     * @return {number}
     */
    popleft() {
        const start = this.left.next;
        if (start === this.right) {
            return -1
        }

        const prev = start.prev;
        const next = start.next;
        prev.next = next;
        next.prev = prev;
    
        return start.val
    }
}
