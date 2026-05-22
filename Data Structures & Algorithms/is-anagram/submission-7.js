class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        let sorted = (set) => [...set].sort().join(',');
        return sorted(s) === sorted(t)
        
    }
}
