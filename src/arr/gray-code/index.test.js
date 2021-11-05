import grayCode from ".";

test('grayCode(0) should equal to [0]', () => {
  expect(grayCode(0)).toEqual([0]);
});

test('grayCode(1) should equal to [0, 1]', () => {
  expect(grayCode(1)).toEqual([0, 1]);
});

test('grayCode(2) should equal to [0, 1, 3, 2]', () => {
  expect(grayCode(2)).toEqual([0, 1, 3, 2]);
});

test('grayCode(3) should equal to [0, 1, 3, 2, 6, 7, 5, 4]', () => {
  expect(grayCode(3)).toEqual([0, 1, 3, 2, 6, 7, 5, 4]);
});
