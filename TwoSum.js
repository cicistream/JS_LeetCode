/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {};
    for (let n, i = 0, l = nums.length; i < l; ++i) {
        n = nums[i];
        
        if (hash[n] >= 0) {
            return [hash[n], i]
        }
        hash[target - n] = i
    }
};
