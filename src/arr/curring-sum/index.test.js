import curringSum from ".";

test('should curringSum(1, 3).sumOf() to be 4', () => {
  expect(curringSum(1, 3).sumOf()).toBe(4);
});

test('should curringSum(1, 3)(2, 4).sumOf() to be 10', () => {
  expect(curringSum(1, 3)(2, 4).sumOf()).toBe(10);
});
