class TreeNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class TreeMap {
    constructor() {
        this.root = null;
    }

    /**
     * @param {number} key
     * @param {number} val
     * @returns {void}
     */
    insert(key, val) {
        if (this.root === null) {
            this.root = new TreeNode(key, val);
            return;
        }

        let curr = this.root;

        while (true) {
            if (key < curr.key) {
                if (!curr.left) {
                    curr.left = new TreeNode(key, val);
                    break;
                }
                curr = curr.left
            }
            else if (key > curr.key) {
                if (!curr.right) {
                    curr.right = new TreeNode(key, val);
                    break
                }
                curr = curr.right;
            }
            else {
                curr.val = val;
                break;
            }
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let curr = this.root;

        while (curr) {
            if (key < curr.key) {
                curr = curr.left;
            }
            else if (key > curr.key) {
                curr = curr.right
            }
            else {
                return curr.val
            }
        }

        return -1
    }

    /**
     * @returns {number}
     */
    getMin() {
        let curr = this.root;

        while (curr && curr.left) {
            curr = curr.left
        }

        return curr ? curr.val : -1
    }

    /**
     * @returns {number}
     */
    getMax() {
        let curr = this.root;

        while (curr && curr.right) {
            curr = curr.right;
        }

        return curr ? curr.val : -1
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
        this.root = this.removeHelper(this.root, key)
    }

    removeHelper(root, key) {
        if (root === null) {
            return null;
        }

        if (key < root.key) {
            root.left = this.removeHelper(root.left, key)
        }
        else if (key > root.key) {
            root.right = this.removeHelper(root.right, key)
        }
        else {
            if (!root.left) {
                return root.right
            }
            else if (!root.right) {
                return root.left
            }
            else {
                const minNode = this.minNode(root.right);
                root.key = minNode.key;
                root.val = minNode.val;
                root.right = this.removeHelper(root.right, minNode.key)
            }
        }

        return root;
    }

    minNode(root) {
        let curr = root;

        while (curr && curr.left) {
            curr = curr.left
        }

        return curr;
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys() {
        let result = [];

        const dfs = (root) => {
            if (root === null) {
                return;
            }

            dfs(root.left);
            result.push(root.key)
            dfs(root.right);
        }
        dfs(this.root);

        return result
    }
}
