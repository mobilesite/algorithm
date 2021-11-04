/**
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
 */
// 简化前版本
// export default (s) => {
//   const arr = s.split(' ');
//   // 注意map的处理结果需要用一个新数组来接收，原数组不会改变
//   const result = arr.map(item => {
//     return item.split('').reverse().join('');
//   });

//   return result.join(' ');
// };

// 简化后版本
// export default (s) => {
//   return s.split(' ').map(item => {
//     return item.split('').reverse().join('');
//   }).join(' ');
// };

// 替换成正则的版本
// export default (s) => {
//   return s.split(/\s/g).map(item => {
//     return item.split('').reverse().join('');
//   }).join(' ');
// };

// 替换成match的版本
export default (s) => {
  return s.match(/[^\s]+/g).map(item => {
    return item.split('').reverse().join('');
  }).join(' ');
};