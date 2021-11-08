import rotateImage from ".";

test('should equal to [[7,4,1],[8,5,2],[9,6,3]]', () => {
  const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  expect(rotateImage(input)).toEqual([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
  ]);
});

test('should equal to [[1]]', () => {
  const input = [
    [1]
  ];
  expect(rotateImage(input)).toEqual([
    [1]
  ]);
});