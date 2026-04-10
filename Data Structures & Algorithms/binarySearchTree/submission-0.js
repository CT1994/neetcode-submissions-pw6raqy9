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
        const treeNode = new TreeNode(key, val);
        if (!this.root) {
            this.root = treeNode;
            return;
        }
        
        let curr = this.root;
            while (true) {
                if (key < curr.key) {
                    if (curr.left === null) {
                        curr.left = treeNode;
                        break;
                    }
                    curr = curr.left
                }
                else if (key > curr.key) {
                    if (curr.right === null) {
                        curr.right = treeNode;
                        break;
                    }
                    curr = curr.right
                }
                else {
                    curr.val = val;
                    break
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
                curr = curr.left
            }
            else if (key > curr.key) {
                curr = curr.right;
            }
            else {
                return curr.val
            }
        }

        return -1;
    }

    /**
     * @returns {number}
     */
    getMin() {
        if (!this.root) {
            return -1;
        }

        let curr = this.root;

        while (curr && curr.left) {
            curr = curr.left;
        }

        return curr.val
    }

    /**
     * @returns {number}
     */
    getMax() {
        if (!this.root) {
            return -1;
        }
        
        let curr = this.root;

        while (curr && curr.right) {
            curr = curr.right;
        }

        return curr.val
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
        this.root = this._removeNode(this.root, key);
    }

    _removeNode(node, key) {
        if (!node) return null;

        if (key < node.key) {
            node.left = this._removeNode(node.left, key);
        } else if (key > node.key) {
            node.right = this._removeNode(node.right, key);
        } else {
            // Found the node!
            
            // Case 1 & 2: No child or only one child
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            // Case 3: Two children
            // Get the inorder successor (smallest in the right subtree)
            const minNode = this._findMin(node.right);
            node.key = minNode.key;
            node.val = minNode.val;
            
            // Delete the successor
            node.right = this._removeNode(node.right, minNode.key);
        }
        return node;
    }

    _findMin(node) {
        while (node.left) node = node.left;
        return node;
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys() {
        const result = [];
        
        const dfs = (root) => {
            if (root === null) {
                return;
            }

            dfs(root.left);
            result.push(root.key)
            dfs(root.right);
        }

        dfs(this.root)

        return result
    }
}
