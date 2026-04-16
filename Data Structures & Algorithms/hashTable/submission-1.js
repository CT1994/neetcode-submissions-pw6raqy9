const TOMBSTONE = {};

class Pair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class HashTable {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.size = 0;
        this.capacity = capacity;
        this.map = new Array(capacity).fill(null);
    }

    hash(key) {
        return key % this.capacity;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    insert(key, value) {
        let index = this.hash(key);

        while (true) {
            if (this.map[index] === null || this.map[index] === TOMBSTONE) {
                this.map[index] = new Pair(key, value);
                this.size++;
                if (this.size >= this.capacity / 2) {
                    this.resize();
                }
                break;
            } else if (this.map[index].key === key) {
                this.map[index].value = value;
                break;
            }
            index++;
            index = index % this.capacity;
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let index = this.hash(key);

        while (this.map[index] !== null) {
            if (this.map[index].key === key) {
                return this.map[index].value;
            }

            index++;
            index = index % this.capacity;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key) {
        let index = this.hash(key);

        while (this.map[index] !== null) {
            if (this.map[index].key === key) {
                this.map[index] = TOMBSTONE;
                this.size--;
                return true;
            }

            index++;
            index = index % this.capacity;
        }

        return false;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }

    /**
     * @return {void}
     */
    resize() {
        const oldMap = this.map;
        let oldSize = this.size;
        this.capacity = this.capacity * 2;
        this.map = new Array(this.capacity).fill(null);
        this.size = 0;

        let i = 0;
        while (oldSize > 0) {
            if (oldMap[i] !== null && oldMap[i] !== TOMBSTONE) {
                this.insert(oldMap[i].key, oldMap[i].value);
                oldSize--
            }
            i++
        }
    }
}
