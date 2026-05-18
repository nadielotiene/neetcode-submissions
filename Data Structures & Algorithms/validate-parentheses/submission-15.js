class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const pairs = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        for (let i = 0; i < s.length; i++) {
            let char = s[i];

            if (char === '(' || char === '{' || char === '[') {
                stack.push(char)
            } else {
                if (stack.pop() !== pairs[char]) {
                return false
                }
            }
        }
        return stack.length === 0;
    }
}
