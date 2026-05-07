class Solution {
    minCostConnectPoints(points) {
        const n = points.length;
        if (n === 0) return 0;

        let totalCost = 0;
        let nodesInMST = 0;
        
        const minDist = new Float64Array(n).fill(Infinity);
        const visited = new Uint8Array(n);
        
        // Start with the first point
        minDist[0] = 0;
        
        while (nodesInMST < n) {
            let currNode = -1;
            
            // Find the unvisited node with the smallest distance to the MST
            for (let i = 0; i < n; i++) {
                if (!visited[i] && (currNode === -1 || minDist[i] < minDist[currNode])) {
                    currNode = i;
                }
            }

            // If we can't find a node, the graph is disconnected (shouldn't happen here)
            if (minDist[currNode] === Infinity) break;

            visited[currNode] = 1;
            totalCost += minDist[currNode];
            nodesInMST++;
            
            const [x1, y1] = points[currNode];

            // Update distances to all other unvisited nodes
            for (let nextNode = 0; nextNode < n; nextNode++) {
                if (!visited[nextNode]) {
                    const [x2, y2] = points[nextNode];
                    const weight = Math.abs(x1 - x2) + Math.abs(y1 - y2);
                    
                    if (weight < minDist[nextNode]) {
                        minDist[nextNode] = weight;
                    }
                }
            }
        }
        
        return totalCost;
    }
}