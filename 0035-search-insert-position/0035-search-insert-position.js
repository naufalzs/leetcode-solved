/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// loop
// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target || nums[i] > target) {
//       return i;
//     }
//   }

//   return nums.length;
// };

// Binary Search
var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      return mid;
    }
  }
  return l;
};