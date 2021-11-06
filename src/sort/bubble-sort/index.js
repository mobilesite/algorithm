/**
 * 冒泡排序
 */
export default (arr) => {
  // 外层控制应该比较到的最大位置
  for (let i = arr.length - 1, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}