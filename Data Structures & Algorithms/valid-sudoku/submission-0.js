class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const n = board.length;
        const s = Math.sqrt(n)

        const row = Array.from({ length: n }, () => new Set());
        const col = Array.from({ length: n }, () => new Set());
        const grid = Array.from({ length: n }, () => new Set());

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (board[r][c] === ".") {
                    continue;
                }
                const gridPosition = Math.floor(r / 3) * 3 + Math.floor(c / 3)
                if (
                    row[r].has(board[r][c]) ||
                    col[c].has(board[r][c]) ||
                    grid[gridPosition].has(board[r][c])
                ) {
                    return false;
                }

                row[r].add(board[r][c]);
                col[c].add(board[r][c]);
                grid[gridPosition].add(board[r][c]);
            }
        }

        return true;
    }
}
