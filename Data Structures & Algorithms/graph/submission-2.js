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
            this.map.set(src, new Set());
        }

        if (!this.map.has(dst)) {
            this.map.set(dst, new Set());
        }

        this.map.get(src).add(dst);
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    removeEdge(src, dst) {
        if (this.map.has(src) && this.map.get(src).has(dst)) {
            this.map.get(src).delete(dst);
            return true;
        }
        return false;
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    hasPath(src, dst) {
        const visit = new Set();
        const queue = [];
        this.map.get(src)?.forEach((src) => {
            queue.push(src);
            visit.add(src);
        });

        while (queue.length) {
            const queueLength = queue.length;
            for (let i = 0; i < queueLength; i++) {
                const src = queue.shift();
                if (src === dst) {
                    return true;
                }
                this.map.get(src)?.forEach((src) => {
                    if (!visit.has(src)) {
                        queue.push(src);
                        visit.add(src);
                    }
                });
            }
        }

        return false;
    }
}
