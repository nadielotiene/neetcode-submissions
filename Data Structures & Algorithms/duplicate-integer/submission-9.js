class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                sum++
                if (nums[i] === nums[j]) {
                    return true
                }
            }
        }
        return false
    }
}
