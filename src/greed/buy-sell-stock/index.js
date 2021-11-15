export default (prices) => {
  // 用来保存利润
  let profit = 0;

  // 外层对所有的价格进行遍历
  for (let i = 0, len = prices.length; i < len - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i];
    }
  }

  return profit;
}