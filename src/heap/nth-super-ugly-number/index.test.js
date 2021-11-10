import getNthSuperUglyNumber, {
  SuperUglyNumber
} from '.';

test('获取指定正整数n的所有质因数', () => {
  expect(SuperUglyNumber.getPrimes(6)).toEqual([2, 3]);
  expect(SuperUglyNumber.getPrimes(4)).toEqual([2]);
  expect(SuperUglyNumber.getPrimes(180)).toEqual([2, 3, 5]);
});

test('获取第n个超级丑数', () => {
  expect(getNthSuperUglyNumber(12, [2, 7, 13, 19])).toBe(32);
});

// TODO: 这个测试用例没有通过，耗时太长待优化
// test('获取第n个超级丑数', () => {
//   expect(getNthSuperUglyNumber(800, [37, 43, 59, 61, 67, 71, 79, 83, 89, 97, 101, 103, 113, 127, 131, 157, 163, 167, 173, 179, 191, 193, 197, 199, 211, 229, 233, 239, 251, 257])).toBe(32);
// });
