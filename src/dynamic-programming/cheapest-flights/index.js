export default (n, flights, src, dst, k) => {
  // 采用 Bellman-ford 算法
  const INFINITY = 10000 * 101 + 1;
  // 因为new Array()传入的是数组长度，下文中要用到下标为k+1的，所以这里应该传入K+2
  const f = new Array(k + 2).fill(0).map(() => new Array(n).fill(INFINITY));

  // 状态 f[t][i] 表示一共搭乘 t 趟航班到达城市 i 的最小花费
  // 当 t=0 时，状态 f[t][i] 表示不搭乘航班到达城市 i 的最小花费
  // 如果 i 是出发城市 src，那么花费为 0；否则 f[0][i] 不是一个合法的状态，由于在状态转移方程中我们需要求出的是最小值，因此可以将不合法的状态置为极大值
  f[0][src] = 0;

  for (let t = 1; t <= k + 1; t++) {
    for (const flight of flights) {
      const j = flight[0],
        i = flight[1],
        cost = flight[2];
      f[t][i] = Math.min(f[t][i], f[t - 1][j] + cost);
    }
  }

  let ans = INFINITY;
  for (let t = 1; t <= k + 1; t++) {
    ans = Math.min(ans, f[t][dst]);
  }
  
  return ans == INFINITY ? -1 : ans;
}
