class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] === "+") {
                stack.push(stack.pop() + stack.pop());
            } else if (tokens[i] === "-") {
                const val1 = stack.pop();
                const val2 = stack.pop();
                stack.push(val2 - val1);
            } else if (tokens[i] === "*") {
                stack.push(stack.pop() * stack.pop());
            } else if (tokens[i] === "/") {
                const val1 = stack.pop();
                const val2 = stack.pop();
                const val3 = val2 / val1;
                if (val3 < 0) {
                    stack.push(Math.ceil(val3))
                }
                else {
                    stack.push(Math.floor(val3))
                }
            } else {
                stack.push(parseInt(tokens[i], 10));
            }
        }

        return stack.pop();
    }
}
