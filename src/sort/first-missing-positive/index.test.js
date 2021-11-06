import firstMissingPositive from ".";

test('should firstMissingPositive([1,2,0]) to be 3', () => {
  expect(firstMissingPositive([1, 2, 0])).toBe(3);
});
test('should firstMissingPositive([3,4,-1,1]) to be 2', () => {
  expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
});
test('should firstMissingPositive([7,8,9,11,12]) to be 1', () => {
  expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1);
});

