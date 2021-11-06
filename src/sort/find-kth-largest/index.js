/**
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 */
// export default (nums, k) => {
//   nums.sort((a, b) => b - a);
//   // 注意这里是k - 1而不是k
//   return nums[k - 1];
// }

export default (nums, k) => {
  for (let i = nums.length - 1, tmp; i > nums.length - 1 - k; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
      }
    }
  }
  return nums[nums.length - k];
}