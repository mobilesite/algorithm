/**
 * 选择排序
 */
export default (arr) => {
  for (let i = 0, len = arr.length, min; i < len; i++) {
    min = arr[i];
    // 内层循环控制从哪个元素比较起
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        const tmp = min;
        min = arr[j];
        arr[j] = tmp;
      }
    }
    arr[i] = min;
  }
  return arr;
}