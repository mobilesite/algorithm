import maxRectangle from ".";

test('should maxRectangle([]) to be 0', () => {
  expect(maxRectangle([])).toBe(0);
});

test('should maxRectangle([["0"]]) to be 0', () => {
  expect(maxRectangle([
    ["0"]
  ])).toBe(0);
});

test('should maxRectangle([["1"]]) to be 1', () => {
  expect(maxRectangle([
    ["1"]
  ])).toBe(1);
});

test('should maxRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]) to be 6 ', () => {
  expect(maxRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ])).toBe(6);
});
