/**
 * https://leetcode-cn.com/problems/repeated-substring-pattern
 */
// export default (s) => {
//   for (let i = 1, len = s.length; i < len; i++) {
//     const sub = s.substring(0, i);

//     if (len % i === 0) {
//       const repeatNum = len / i;
//       if (sub.repeat(repeatNum) === s) return true;
//     }
//   }

//   return false;
// }

// 方法2：正则方法1
// export default (s) => {
//   for (let i = 1, len = s.length; i < len; i++) {
//     const sub = s.substring(0, i);

//     if (len % i === 0) {
//       const reg = new RegExp(`^(${sub}){${len/i}}$`);
//       if (reg.test(s)) {
//         return true;
//       }
//     }
//   }

//   return false;
// }

// 方法3：正则方法2
// export default (s) => {
//   for (let i = 1, len = s.length; i < len; i++) {
//     const sub = s.substring(0, i);

//     if (len % i === 0) {
//       const reg = new RegExp(`^(${sub})+$`);
//       if (reg.test(s)) return true;
//     }
//   }

//   return false;
// }

// 方法4：正则方法3
export default (s) => {
  return /^([a-z]+)\1+$/.test(s);
}