import uniquePaths from '.';

test('unique path 1:', () => {
  const arr = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ];
  expect(uniquePaths(arr)).toBe(2);
});

test('unique path 2:', () => {
  const arr = [
    [0, 1],
    [0, 0]
  ];
  expect(uniquePaths(arr)).toBe(1);
});

test('unique path 3:', () => {
  const arr = [
    [1, 0],
    [0, 0]
  ];
  expect(uniquePaths(arr)).toBe(0);
});

test('unique path 4:', () => {
  const arr = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
  ];
  expect(uniquePaths(arr)).toBe(7);
});

test('unique path 5:', () => {
  const arr = [
    [1, 0]
  ];
  expect(uniquePaths(arr)).toBe(0);
});

