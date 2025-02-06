/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let seen = {}
    for( i = 0; i < nums.length; i++ ) {
        diff = target - nums[i];
        if (seen[diff] !== undefined) {
            return [i, seen[diff]]
        } else {
            seen[nums[i]]=i;
        }
    }
};