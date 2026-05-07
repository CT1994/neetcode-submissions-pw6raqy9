class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const N = grid.length;
        const size = N * N;

        const positions = new Int32Array(size);
        for (let r = 0; r < N; r++) {
            for (let c = 0; c < N; c++) {
                const idx = r * N + c;
                positions[idx] = (grid[r][c] << 16) | idx;
            }
        }

        positions.sort((a, b) => (a >> 16) - (b >> 16));

        const parent = new Int32Array(size);
        for (let i = 0; i < size; i++) parent[i] = i;

        function find(i) {
            while (parent[i] !== i) {
                parent[i] = parent[parent[i]];
                i = parent[i];
            }
            return i;
        }

        const isActive = new Uint8Array(size);
        const startNode = 0;
        const endNode = size - 1;

        for (let i = 0; i < size; i++) {
            const val = positions[i] >> 16;
            const pos = positions[i] & 0xffff;
            const r = (pos / N) | 0;
            const c = pos % N;

            isActive[pos] = 1;

            if (r > 0 && isActive[pos - N]) {
                const root1 = find(pos);
                const root2 = find(pos - N);
                if (root1 !== root2) parent[root1] = root2;
            }

            if (r < N - 1 && isActive[pos + N]) {
                const root1 = find(pos);
                const root2 = find(pos + N);
                if (root1 !== root2) parent[root1] = root2;
            }

            if (c > 0 && isActive[pos - 1]) {
                const root1 = find(pos);
                const root2 = find(pos - 1);
                if (root1 !== root2) parent[root1] = root2;
            }
            if (c < N - 1 && isActive[pos + 1]) {
                const root1 = find(pos);
                const root2 = find(pos + 1);
                if (root1 !== root2) parent[root1] = root2;
            }

            if (isActive[startNode] && isActive[endNode]) {
                if (find(startNode) === find(endNode)) {
                    return val;
                }
            }
        }

        return 0;
    }
}
