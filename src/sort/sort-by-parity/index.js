/**
 * https://leetcode-cn.com/problems/sort-array-by-parity-ii/
 */
export default (nums) => {
  nums.sort((a, b) => a - b);
  const result = [];
  let even = 0, odd = 1; // 定义两个指针来指示奇数、偶数分别应该放往的位置

  nums.map(item => {
    if (item % 2 === 0) {
      result[even] = item;
      even += 2;
    } else {
      result[odd] = item;
      odd += 2;
    }
  })

  return result;
}