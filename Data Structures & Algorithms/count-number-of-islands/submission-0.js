class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;
        const ROWS = grid.length;
        const COLS = grid[0].length;
        console.log(ROWS)
        console.log(COLS)

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                console.log(r, c)
                if (grid[r][c] === "1") {
                    this.dfs(grid, r, c);
                    count++
                }
            }
        }
        return count;
    }

    /**
     * @param {character[][]} grid
     * @param {number} r
     * @param {number} c
     */
    dfs(grid, r, c) {
        if (
            r < 0 ||
            c < 0 ||
            r >= grid.length ||
            c >= grid[0].length
        ) {
            return
        }
        // hit water
        if (grid[r][c] === "1") {
            grid[r][c] = "0"
            this.dfs(grid, r - 1, c);
            this.dfs(grid, r + 1, c);
            this.dfs(grid, r, c - 1);
            this.dfs(grid, r, c + 1);
        }
    }
}
