/**
 * https://leetcode-cn.com/problems/spiral-matrix/
 */
export default (arr) => {
  // 处理每一圈的数据遍历过程
  const map = (arr, r = []) => {
    for(let i = 0, len = arr.length; i < len; i++) {
      // 注意：这里也要进行arr[i].length的判断，否则会出错
      // 因为当输入矩阵为[[1,2,3,4,5,6]] 时，这里会出现arr[i]为空数组的情况
      if (arr[i].length) {
        if (i === 0) {
          // 第一行
          r = r.concat(arr[i]);
        } else if (i === len - 1) {
          // 最后一行需要反转
          r = r.concat(arr[i].reverse())
        } else {
          // 中间那几行只取最后一个，并将它们弹出
          r.push(arr[i].pop())
        }
      }
    }
    // 把第一行和最后一行丢掉
    arr.shift();
    arr.pop();

    for (let i = arr.length - 1; i >= 0; i--) {
      // 从下往上得到中间那几行的头部那几行的第一个元素并弹出
      // 注意：这里要进行arr[i].length的判断，因为当输入的矩阵是[[1],[2],[3]]这样的形式时，这里arr[i]会是个空数组
      if (arr[i].length) {
        r.push(arr[i].shift());
      }
    }

    // 如果还有内层未遍历的元素，则递归遍历，否则直接返回
    if (arr.length) {
      return map(arr, r);
    } else {
      return r;
    }
  }

  return map(arr, []);
}