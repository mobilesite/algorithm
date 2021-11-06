/**
 * https://leetcode-cn.com/problems/regular-expression-matching/
*/
export default (str, pattern) => {
  const arr = pattern.match(/([a-z.]\*)|(.(?!=\*))|([a-z]+(?=([a-z.]\*)|$))/g);
  const strLen = str.length;
  let cur = 0; // 光标指针

  for (let i = 0, len = arr.length; i < len; i++) {
    // 对于模式，共分为三类：1).*  2)a*  3)单独的. 4)abc
    // 对于.*，则直接返回true
    const m = arr[i].split('');
    // 如果第二位是*，则表示它们要么是.*，要么是字母*
    if (m[1] === '*') {
      if (m[0] === '.') {
        // 因为/.*/g会直接匹配上整个字符串s，所以，光标移至末尾
        cur = strLen;
      } else {
        // /[a-z]*/g，要做个while循环，只要s[cur] === m[0]，则将光标右移一位，直到该等式不再成立
        while (str[cur] === m[0]) {
          cur++;
        }
      }
    } else if (m[0] === '.') {
      // 单独的.
      cur++;
    } else {
      // abc
      for (let j = 0, jl = m.length; j < jl; j++) {
        if (m[j] !== str[cur]) {
          return false;
        } else {
          cur++;
        }
      }
    }
  }

  return cur === strLen;
}