/**
 * https://leetcode-cn.com/problems/first-missing-positive
 */
// 方法1：直接利用sort排序，找前后间隔大于1的元素
// export default (nums) => {
//   // 过滤一下非正数
//   nums = nums.filter(item => item > 0);

//   if (nums.length === 0) return 1;
//   nums.sort((a, b) => a - b);
//   if (nums[0] !== 1) return 1;

//   for(let i = 0, len = nums.length; i < len - 1; i++) {
//     // 遇到前后间隔大于1的，则把前一个数+1返回
//     if (nums[i + 1] - nums[i] > 1) {
//       return nums[i] + 1;
//     }
//   }

//   // 直到末尾也没有找到前后间隔大于1的，则把最后一个元素+1返回
//   return nums.pop() + 1;
// }

// 方法2：利用选择排序，找到结果即终止，不用全部排序
export default (nums) => {
  // 过滤一下非正数
  nums = nums.filter(item => item > 0);

  if (nums.length === 0) return 1;
  
  for (let i = 0, len = nums.length, min; i < len; i++) {
    min = nums[i];
    // 内层循环控制从哪个元素比较起
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < min) {
        const tmp = min;
        min = nums[j];
        nums[j] = tmp;
      }
    }
    nums[i] = min;
    if (i === 0 && min !== 1) return 1;
    if (i > 0 && nums[i] - nums[i - 1] > 1) return nums[i - 1] + 1;
  }

  return nums.pop() + 1;
}