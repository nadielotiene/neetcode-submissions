class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.size !== t.size) {
            return false
        }
        let sortS = s.split('').sort().join(',')
        let sortT = t.split('').sort().join(',')
        return sortS === sortT;
    }
}
