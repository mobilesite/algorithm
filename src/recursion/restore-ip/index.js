/**
 * https://leetcode-cn.com/problems/restore-ip-addresses/
 */
export default (str) => {
  const result = []; // 保存所有符合条件的IP地址

  if (str === '' || parseInt(str, 10) > 255255255255) return [];

  // 分四步递归处理IP分段
  const search = (cur, sub) => {
    // 边界条件
    if (cur.length === 4 && cur.join('') === str) {
      result.push(cur.join('.'));
    } else {
      // 正常的处理过程
      for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {
        tmp = sub.substr(0, i + 1);
        if (tmp < 256 && !(/^0\d+/.test(tmp))) {
          search(cur.concat([tmp]), sub.substr(i + 1))
        }
      }
    }
  }

  search([], str);

  return result;
}