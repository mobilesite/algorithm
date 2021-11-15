/**
 * https://leetcode-cn.com/problems/lemonade-change/
 */
export default function(bills) {
  // 表示自己的钱箱，用来存储钱
  const cashBox = [];

  while (bills.length) {
    // 接收最前面顾客的钱
    let money = bills.shift();

    if (money !== 5) {
      // 需要找给顾客的零钱 = 顾客给的钱 - 饮料价格
      let change = money - 5;
      // 对手中的钱按面值降序排列
      cashBox.sort((a, b) => b - a);
      for(let i = 0, len = cashBox.length; i < len; i++) {
        if (cashBox[i] <= change) {
          change -= cashBox[i];
          // 每一张零钱被找出去之后，都要从钱箱中删除
          cashBox.splice(i, 1);
          // 删除了元素之后，数组的长度发生了变化，要采取措施维持i不变
          i--;
        }

        if (change === 0) break;
      }

      if (change !== 0) return false;
    }

    // 如果找开了或者不用找，要把顾客给你的钱存入钱箱之中
    cashBox.push(money);
  }

  return true;
}