/**
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 */
export default (s) => {
  if (typeof s !== 'string') {
    console.log('error: typeof s is not string');
    return;
  };

  // 建立电话号码键盘映射
  const map = [
    '',
    '1',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz'
  ];

  const comb = (arr) => {
    // 这个特殊情况处理不要忘记
    // 否则会导致下文的arr[0].length和arr[1].length报错
    if (arr.length === 0) return [];
    if (arr.length === 1) return arr[0].split('');

    // 临时变量用来保存前两个组合的结果
    const tmp = [];

    // 外层的循环是遍历第一个元素，里层的循环是遍历第二个元素
    for (let i = 0, ilen = arr[0].length; i < ilen; i++) {
      for (let j = 0, jlen = arr[1].length; j < jlen; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }

    // 用第一项和第二项组合得到的结果替换掉第一和第二项
    arr.splice(0, 2, tmp);

    if (arr.length > 1) {
      return comb(arr);
    } else {
      return tmp;
    }
  }

  // code保存键盘映射后的字母内容  '23' => ['abc', 'def']
  const code = [];
  s.split('').forEach(item => {
    if (map[item]) {
      code.push(map[item]);
    }
  });

  return comb(code);
}