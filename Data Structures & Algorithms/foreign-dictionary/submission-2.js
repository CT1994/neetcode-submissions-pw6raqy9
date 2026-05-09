class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const adjList = new Map();
        const edges = [];

        for (const word of words) {
            for (const c of word) {
                if (!adjList.has(c)) {
                    adjList.set(c, new Set())
                }
            }
        }

        for (let i = 0; i < words.length; i++) {
            if (i + 1 === words.length) {
                break;
            }

            const word1 = words[i];
            const word2 = words[i + 1];

            if (word1.length > word2.length && word1.startsWith(word2)) {
                return ""
            }

            let j = 0;

            while (j < word1.length && j < word2.length) {
                if (word1[j] !== word2[j]) {
                    edges.push([word2[j], word1[j]])
                    break;
                }
                j++
            }
        }

        console.log(edges)

        for (const [src, dest] of edges) {
            adjList.get(dest).add(src)
        }

        const topSort = [];
        const visit = new Set();
        const visiting = new Set();

        const dfs = (src) => {
            if (visiting.has(src)) {
                return false
            }

            if (visit.has(src)) {
                return true;
            }

            visiting.add(src)
            for (const neighbor of adjList.get(src)) {
                if (!dfs(neighbor)) {
                    return false
                }
            }

            visiting.delete(src)
            visit.add(src)
            topSort.push(src);
            return true
        }

        for (const key of adjList.keys()) {
            if (!dfs(key)) {
                return ""
            }
        }

        return topSort.reverse().join("")
    }
}
