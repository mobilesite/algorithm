/**
 * https://leetcode-cn.com/problems/maximum-gap
 */
// 方法1
export default (nums) => {
  let maxGap = 0;

  nums.sort((a, b) => a - b);
  for (let i = 1, len = nums.length; i < len; i++) {
    const gap = nums[i] - nums[i - 1];
    if (gap > maxGap) maxGap = gap;
  }

  return maxGap;
}

// 方法2
// export default (nums) => {
//   let maxGap = 0;

//   for (let i = nums.length - 1, tmp; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] > nums[j + 1]) {
//         tmp = nums[j + 1];
//         nums[j + 1] = nums[j];
//         nums[j] = tmp;
//       }
//     }


//     if (i < nums.length - 1) {
//       // 注意：这一句必须包含在if (i < nums.length - 1)内部，否则会因为i+1越界而导致gap为NaN
//       const gap = nums[i + 1] - nums[i];
//       if (gap > maxGap) maxGap = gap;
//     }
//   }

//   // 后面这几句很重要，因为上面的遍历中只遍历到了nums[2]-nums[1]，而没有到nums[1]-nums[0]，不做下面的处理，将导致结果出错
//   if (nums.length <= 1) {
//     return 0;
//   }
//   return Math.max(maxGap, nums[1] - nums[0]);
// }
