/**
 * https://leetcode-cn.com/problems/unique-paths-ii/
 */
// 方法1
// export default (arr) => {
//   const m = arr.length;
//   const n = arr[0].length;
//   const r = new Array(m).fill(0).map(() => new Array(n).fill(0));

//   // 初始化第一列，只要碰到一个1，那么后边都无法走到
//   for (let i = 0; i < m; i++) {
//     if (arr[i][0] === 1) {
//       break;
//     }
//     r[i][0] = 1;
//   }

//   // 初始化第一行，只要碰到一个1，那么后边都无法走到
//   for (let j = 0; j < n; j++) {
//     if (arr[0][j] === 1) {
//       break;
//     }
//     r[0][j] = 1;
//   }

//   // 在没有障碍物的情况下，到达某一点只能从左边或者上边
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       r[i][j] = arr[i][j] == 1 ? 0 : r[i - 1][j] + r[i][j - 1];
//     }
//   }

//   return r[m - 1][n - 1];
// }

// 方法2: 优化空间复杂度
export default (arr) => {
  const m = arr.length;
  const n = arr[0].length;
  const r = [];

  r[0] = arr[0][0] === 0 ? 1 : 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (r[j] === undefined) {
        r[j] = 0;
      }
      if (arr[i][j] === 1) {
        r[j] = 0;
        continue;
      }
      if (j - 1 >= 0 && arr[i][j - 1] === 0) {
        r[j] += r[j - 1];
      }
    }
  }

  return r[n - 1];
}