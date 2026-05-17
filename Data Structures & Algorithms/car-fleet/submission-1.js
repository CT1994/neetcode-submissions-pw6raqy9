class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let res = 0;
        const n = position.length
        const fleet = [];

        for (let i = 0; i < n; i++) {
            fleet.push([position[i], speed[i]])
        }

        fleet.sort((a, b) => b[0] - a[0]);
        const stack = [];
        for (let i = 0; i < n; i++) {
            const car = fleet[i]
            const steps = (target - car[0]) / car[1];
            console.log(steps)

            if (stack.length > 0 && stack[stack.length - 1] >= steps) {
                stack.push(stack[stack.length - 1])
            }
            else {
                res++
                stack.push(steps)
            }
        }

        console.log(stack)

        return res;
    }
}
