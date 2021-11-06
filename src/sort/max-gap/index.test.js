import maxGap from ".";

// test('should maxGap([1, 2, 3, 4, 5, 19, 17, 14, 21])', () => {
//   expect(maxGap([1, 2, 3, 4, 5, 19, 17, 14, 21])).toBe(9);
// });

test('should maxGap([1, 10000000])', () => {
  expect(maxGap([1, 10000000])).toBe(10000000 - 1);
});

