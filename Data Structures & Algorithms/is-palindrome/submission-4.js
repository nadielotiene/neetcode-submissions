class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let reversed = s.split("").reverse().join("");
        if (reversed === s) {
            return true;
        }
        return false;
    }
}
