class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let curr = this.head;
        let i = 0;

        while (curr) {
            if (i === index) {
                return curr.val
            }

            curr = curr.next;
            i++;
        }

        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const head = new ListNode(val);
        head.next = this.head;
        this.head = head;
        console.log(this.head)
        if (!this.head.next) {
            this.tail = this.head;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const tail = new ListNode(val);
        if (!this.tail) {
            this.head = tail;
            this.tail = tail;
        }
        else {
            this.tail.next = tail;
            this.tail = this.tail.next;
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (!this.head || index < 0) return false;

        // Special Case: Removing the head
        if (index === 0) {
            this.head = this.head.next;
            // If the list is now empty, the tail must be null too
            if (!this.head) {
                this.tail = null;
            }
            return true;
        }

        let curr = this.head;
        let i = 0;

        // Traverse to the node BEFORE the one we want to delete
        while (i < index - 1 && curr.next) {
            curr = curr.next;
            i++;
        }

        // Check if the node to be deleted (curr.next) actually exists
        if (curr && curr.next) {
            // If we are removing the tail node, update tail to the current node
            if (curr.next === this.tail) {
                this.tail = curr;
            }
            curr.next = curr.next.next;
            return true;
        }

        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const res = [];
        let curr = this.head;
        while (curr) {
            res.push(curr.val);
            curr = curr.next;
        }

        return res;
    }
}
