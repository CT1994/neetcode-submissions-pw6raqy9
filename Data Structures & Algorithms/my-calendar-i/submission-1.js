class TreeNode {
    /**
     * @param {number} startTime
     * @param {number} endTime
     */
    constructor(startTime, endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.left = null;
        this.right = null;
    }

    insert(startTime, endTime) {
        let cur = this;
        while (true) {
            if (startTime >= cur.endTime) {
                if (cur.right === null) {
                    cur.right = new TreeNode(startTime, endTime);
                    return true;
                }
                cur = cur.right;
            } else if (endTime <= cur.startTime) {
                if (cur.left === null) {
                    cur.left = new TreeNode(startTime, endTime);
                    return true;
                }
                cur = cur.left;
            } else {
                return false;
            }
        }
    }
}

class MyCalendar {
    constructor() {
        this.root = null;
    }

    /**
     * @param {number} startTime
     * @param {number} endTime
     * @return {boolean}
     */
    book(startTime, endTime) {
        // handle the base case check if we have a root tree node
        if (this.root === null) {
            this.root = new TreeNode(startTime, endTime);
            return true;
        }

        return this.root.insert(startTime, endTime);
    }

    insert(root, startTime, endTime) {
        if (root === null) {
            return new TreeNode(startTime, endTime);
        }

        if (root.endTime <= endTime) {
            root.right = this.insert(root.right, startTime, endTime);
        } else if (root.startTime >= endTime) {
            root.left = this.insert(root.left, startTime, endTime);
        }

        return root;
    }
}
