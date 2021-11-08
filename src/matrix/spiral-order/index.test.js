import { exportAllDeclaration } from "@babel/types";
import spiralOrder from ".";

test('should equal to [1,2,3,6,9,8,7,4,5]', () => {
  const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  expect(spiralOrder(input)).toEqual([1,2,3,6,9,8,7,4,5]);
});

test('should equal to [7,9,6]', () => {
  const input = [
    [7],
    [9],
    [6]
  ];

  expect(spiralOrder(input)).toEqual([7, 9, 6]);
});

test('should equal to [1,2,3,4,5,6,7,8,9,10]', () => {
  const input = [
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
    [10]
  ];

  expect(spiralOrder(input)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
