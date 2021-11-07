import calcPoints from ".";

test('should calcPoints(["5","2","C","D","+"]) to be 30', () => {
  expect(calcPoints(["5", "2", "C", "D", "+"])).toBe(30);
});

test('should calcPoints(["5","-2","4","C","D","9","+","+"]) to be 27', () => {
  expect(calcPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])).toBe(27);
});

test('should calcPoints(["1"]) to be 1', () => {
  expect(calcPoints(["1"])).toBe(1);
});
