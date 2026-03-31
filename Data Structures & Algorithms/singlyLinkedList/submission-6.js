class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        // created a dummy node at the head
        // (D)
        this.head = new ListNode(0);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        // we want to start from the next ListNode not the dummy
        let cur = this.head.next;

        while (cur && index > 0) {
            cur = cur.next;
            index--
        }

        if (cur && index === 0) {
            return cur.val
        }

        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        // (D) -> (V1)
        const node = new ListNode(val, this.head.next);
        this.head.next = node;
        // if we have not initialsied set the tail
        if (!node.next) {
            this.tail = node;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let cur = this.head;

        while (cur && index > 0) {
            cur = cur.next
            index--
        }

        if (cur && cur.next && index === 0) {
            if (cur.next === this.tail) {
                this.tail = cur;
            }

            cur.next = cur.next.next
            return true
        }

        return false
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const res = [];
        let cur = this.head.next;

        while(cur) {
            res.push(cur.val);
            cur = cur.next;
        }

        return res
    }
}
