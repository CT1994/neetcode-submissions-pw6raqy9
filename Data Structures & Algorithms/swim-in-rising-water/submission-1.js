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
        const adjList = Array.from({ length: ROWS * COLS }, () => []);

        for (let r1 = 0; r1 < ROWS; r1++) {
            for (let c1 = 0; c1 < COLS; c1++) {
                for (const [r2, c2] of directions) {
                    const r = r1 + r2;
                    const c = c1 + c2;
                    if (
                        r < 0 ||
                        c < 0 ||
                        r === ROWS ||
                        c === COLS
                    ) {
                        continue
                    }
                    
                    adjList[r1 * COLS + c1].push([r * COLS + c, grid[r][c]])
                }
            }
        }

        const paths = new MinPriorityQueue((val) => val[1]);
        const end = ROWS * COLS - 1;
        paths.enqueue([0, grid[0][0]])
        const seen = new Array(ROWS * COLS).fill(false);
        let highest = 0;

        while (!paths.isEmpty()) {
            const [n1, w1] = paths.dequeue();

            if (seen[n1]) {
                continue;
            }

            seen[n1] = true;
            if (highest < w1) {
                highest = w1
            }

            if (n1 === end) {
                break;
            }

            for (const [n2, w2] of adjList[n1]) {
                if (!seen[n2]) {
                    paths.enqueue([n2, w2])
                }
            }
        }

        return highest
    }
}
