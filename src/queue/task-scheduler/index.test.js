import taskScheduler from ".";

test('should taskScheduler(["A","A","A","B","B","B"], 2) to be 8', () => {
  expect(taskScheduler(["A", "A", "A", "B", "B", "B"], 2)).toBe(8);
});

test('should taskScheduler(["A","A","A","B","B","B"], 0) to be 6', () => {
  expect(taskScheduler(["A", "A", "A", "B", "B", "B"], 0)).toBe(6);
});

test('should taskScheduler(["A","A","A","A","A","A","B","C","D","E","F","G"], 2) to be 16', () => {
  expect(taskScheduler(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)).toBe(16);
});

