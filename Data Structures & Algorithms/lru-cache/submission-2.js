class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.map.has(key)) {
            const value = this.map.get(key);
            this.map.delete(key)
            this.map.set(key, value)
            return value;
        }

        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            this.map.delete(key);
            this.map.set(key, value)
            return;
        }

        if (this.map.size >= this.capacity) {
            this.map.delete(this.map.keys().next().value)
        }
        
        this.map.delete(key)
        this.map.set(key, value);
    }


}
