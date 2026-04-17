class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const sColor = image[sr][sc];
        this.dfs(image, sr, sc, sColor, color, new Set());
        return image;
    }

    /**
     * @param {number[][]} image
     * @param {number} r
     * @param {number} c
     * @param {number} sColor
     * @param {number} color
     * @param {Set<number>} visits
     */
    dfs(image, r, c, sColor, color, visits) {
        const ROWS = image.length;
        const COLS = image[0].length;

        if (
            r < 0 ||
            c < 0 ||
            r >= ROWS ||
            c >= COLS ||
            image[r][c] !== sColor ||
            visits.has(`${r}-${c}`)
        ) {
            return;
        }

        image[r][c] = color;
        visits.add(`${r}-${c}`);
        this.dfs(image, r - 1, c, sColor, color, visits);
        this.dfs(image, r + 1, c, sColor, color, visits);
        this.dfs(image, r, c - 1, sColor, color, visits);
        this.dfs(image, r, c + 1, sColor, color, visits);
    }
}
