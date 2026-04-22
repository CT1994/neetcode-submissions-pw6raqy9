class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const word of strs) {
            let count = new Array(26).fill(0)
            for (const char of word) {
                count[char.charCodeAt() - "a".charCodeAt()] += 1
            }

            const key = count.toString()
            if (!map.has(key)) {
                map.set(key, [])
            }
            
            map.get(key).push(word)
        }

        return [...map.values()]
    }
}
