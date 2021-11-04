/**
 * https://leetcode-cn.com/problems/count-binary-substrings/
 */
// 非递归的实现，性能比下面递归的这个要好
// export default (s) => {
//   const strArr = s.split('');
//   let count = 0;

//   for (let i = 1, len = strArr.length; i < len; i++) {
//     if (strArr[i] !== strArr[i-1]) {
//       count += 1;

//       for (let j = 1; i - j - 1 >= 0 && i + j < len; j++) {
//         if (strArr[i - j - 1] === strArr[i - 1] && strArr[i + j] === strArr[i]) {
//           count += 1;
//         } else {
//           // 注意这里只要不满足上述条件的时候这里一定要立即终止循环
//           break;
//         }
//       }
//     }
//   }

//   return count;
// }

// 递归的实现
export default (s) => {
  let count = 0;

  // 给定任意子输入，返回是否有满足条件的子串
  let match = (s) => {
    const leftStr = s.match(/^(0+|1+)/)[0];
    const len = leftStr.length;
    const rightStr = (leftStr[0] === '0' ? '1' : '0').repeat(len);
    const substr = s.substr(len, len);

    if (substr === rightStr) {
      return true
    }

    return false;
  }

  // 通过for循环控制程序运行的流程
  for (let i = 0, len = s.length - 1; i < len; i++) {
    match(s.slice(i)) && count++;
  }

  return count;
}
