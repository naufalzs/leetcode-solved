/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let isSeen = {};
  let res = 0;
  for (i = 0; i < nums.length; i++) {
    if (isSeen[nums[i]] === undefined) {
      isSeen[nums[i]] = true;
      nums[res] = nums[i];
      res++;
    }
  }
  return res;
};