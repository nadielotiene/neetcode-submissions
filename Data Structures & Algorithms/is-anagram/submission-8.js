class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.size !== t.size) return false
        let sorted = (set) => [...set].sort().join(',');
        return sorted(s) === sorted(t)
        
    }
}
