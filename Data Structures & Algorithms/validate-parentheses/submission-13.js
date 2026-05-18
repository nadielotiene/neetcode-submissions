class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
                stack.push(s[i])
            } else if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
                let lastOpen = stack.pop()
                if ((s[i] === ')' && lastOpen !== '(') || (s[i] === '}' && lastOpen !== '{') || (s[i] === ']' && lastOpen !== '[' )) {
                return false
                }
            }
        }
        return stack.length === 0;
    }
}
