class Graph {
    constructor() {
        /**
         * @type {Map<number, Set<number>>}
         */
        this.map = new Map();
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {void}
     */
    addEdge(src, dst) {
        if (!this.map.has(src)) {
            this.map.set(src, new Set())
        }

        if (!this.map.has(dst)) {
            this.map.set(dst, new Set())
        }

        this.map.get(src).add(dst)
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    removeEdge(src, dst) {
        if (this.map.has(src) && this.map.get(src).has(dst)) {
            this.map.get(src).delete(dst);
            return true
        }
        return false
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    hasPath(src, dst) {
        const queue = [];
        if (this.map.has(src)) {
            const paths = Array.from(this.map.get(src))
            paths.forEach((path) => queue.push(path))
        }

        while (queue.length) {
            const queueLength = queue.length;
            for (let i = 0; i < queueLength; i++) {
                const node = queue.shift();
                if (node === dst) {
                    return true;
                }
                const paths = Array.from(this.map.get(node))
                paths.forEach((path) => queue.push(path))
            }
        }

        return false
    }
}
