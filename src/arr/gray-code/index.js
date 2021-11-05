export default (n) => {
  const make = (n) => {
    // 递归函数，用来计算输入为n的格雷编码序列
    // 注意这个函数返回的结果是二进制的，原因在于它是递归的，
    // 上一轮的二进制结果会被下一轮用到
    // 若改成非二进制结果则会出错
    if (n === 0) {
      return ['0'];
    } else if (n === 1) {
      // 此处易错
      return ['0', '1'];
    }

    const max = Math.pow(2, n) - 1;
    const arr = [];
    const prev = make(n-1);

    for (let i = 0, len = prev.length; i < len; i++) {
      arr[i] = `0${prev[i]}`;
      arr[max - i] = `1${prev[i]}`;
    }
    return arr;
  }

  return make(n).map(item => parseInt(item, 2));
}