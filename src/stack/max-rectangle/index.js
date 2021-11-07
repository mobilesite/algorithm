export default (matrix) => {
  // m表示矩阵的行数
  const m = matrix.length;
  if (m === 0) {
    return 0;
  }

  // n表示矩阵的列数
  const n = matrix[0].length;
  // 注意此用法。left这个二维数组用来存储矩阵中每个元素的左边连续 1的数量
  const left = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        left[i][j] = (j === 0 ? 0 : left[i][j - 1]) + 1;
      }
    }
  }

  let ret = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '0') {
        // 如果某个格子是0，则直接跳过，因为这意味着取不到包含这个格子的由1组成的最小矩形，因为它本身都不是1！
        continue;
      }
      let width = left[i][j];
      let area = width;
      for (let k = i - 1; k >= 0; k--) {
        width = Math.min(width, left[k][j]);
        area = Math.max(area, (i - k + 1) * width);
      }
      ret = Math.max(ret, area);
    }
  }
  return ret;
}
