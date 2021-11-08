/**
 * https://leetcode-cn.com/problems/rotate-image
 */
export default (arr) => {
  // 获取n的行数
  const vector = arr.length;
  // 垂直翻转
  for (let i = 0, len = vector / 2; i < len; i++) {
    for (let j = 0, tmp; j < vector; j++) {
      tmp = arr[i][j];
      arr[i][j] = arr[vector-1-i][j];
      arr[vector-1-i][j] = tmp;
    }
  }
  // 对角线翻转
  for (let i = 0; i < vector; i++) {
    for (let j = 0, tmp; j < i; j++) {
      tmp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = tmp;
    }
  }

  return arr;
}