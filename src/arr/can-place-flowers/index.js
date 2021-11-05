/**
 * https://leetcode-cn.com/problems/can-place-flowers/
 */
// export default (bed, n) => {
//   // 这个特殊情况的处理非常重要，很容易遗漏
//   if (n === 0) return true;

//   let count = 0;
//   const len = bed.length;

//   for (let i = 0; i < len; i++) {
//     if (bed[i]) continue;

//     if (i - 1 < 0) {
//       if (i + 1 > len - 1) {
//         bed[i] = 1;
//         count++;
//       }
//       if (!bed[i + 1]) {
//         bed[i] = 1;
//         count++;
//       }
//     } else {
//       if (i + 1 > len - 1) {
//         if (!bed[i - 1]){
//           bed[i] = 1;
//           count++;
//         }
//       } else {
//         if (!bed[i - 1] && !bed[i + 1]) {
//           bed[i] = 1;
//           count++;
//         };
//       }
//     }

//     if (count >= n) return true;
//   }

//   return false;
// }

export default (bed, n) => {
  // 这个特殊情况的处理非常重要，很容易遗漏
  if (n === 0) return true;

  let count = 0;
  const len = bed.length;

  for (let i = 0; i < len; i++) {
    if (bed[i] === 0) {
      // 三个特殊情况
      // 1、bed为[0]的情况，计数直接加1
      // 2、bed第一个位置为0且第二个位置也为0的情况，计数直接加1
      // 3、bed最后一个位置为0且倒数第二个位置也为0的情况，计数直接加1
      if ((i === 0 && (len === 1 || bed[1] === 0)) || (i === len - 1 && bed[i - 1] === 0)) {
        count++;
        i++;
      } else if (bed[i - 1] === 0 && bed[i + 1] === 0) {
        count++;
        i++;
      }

      if (count >= n) return true;
    }
  }

  return false;
}