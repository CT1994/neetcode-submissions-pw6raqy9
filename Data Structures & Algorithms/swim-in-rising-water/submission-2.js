class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        const paths = new MinPriorityQueue((val) => val[0]);
        const end = ROWS * COLS - 1;
        // w, r, c
        paths.enqueue([grid[0][0], 0, 0])
        const seen = new Array(ROWS * COLS).fill(false);
        let highest = 0;

        while (!paths.isEmpty()) {
            const [w1, r1, c1] = paths.dequeue();
            const key = r1 * COLS + c1
            if (seen[key]) {
                continue;
            }

            seen[key] = true;
            if (highest < w1) {
                highest = w1
            }

            if (key === end) {
                break;
            }

            for (const [r2, c2] of directions) {
                const r = r1 + r2;
                const c = c1 + c2;
                if (
                    r < 0 ||
                    c < 0 ||
                    r === ROWS ||
                    c === COLS ||
                    seen[r * COLS + c]
                ) {
                    continue;
                }

                paths.enqueue([grid[r][c], r, c])
            }
        }

        return highest
    }
}
